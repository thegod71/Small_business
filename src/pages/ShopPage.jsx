import { useSearchParams } from 'react-router-dom';
import useAsync from '@/hooks/useAsync';
import { getCategories, getProducts } from '@/services/catalogService';
import Container from '@/components/ui/Container';
import ProductGrid from '@/components/product/ProductGrid';
import { cn } from '@/utils/cn';

const SORT_OPTIONS = [
  { value: 'popular', label: 'Popular' },
  { value: 'price-asc', label: 'Price: low to high' },
  { value: 'price-desc', label: 'Price: high to low' },
];

export default function ShopPage() {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || '';
  const sort = params.get('sort') || 'popular';

  const { data: categories } = useAsync(getCategories, []);
  const { data: products, loading, error } = useAsync(() => getProducts({ category, sort }), [category, sort]);

  const update = (key, value) => {
    const next = new URLSearchParams(params);
    if (value && value !== 'popular') next.set(key, value);
    else next.delete(key);
    setParams(next);
  };

  const chip = (active) =>
    cn('rounded-full border px-4 py-2 text-sm font-medium transition-colors', active ? 'border-leaf-600 bg-leaf-600 text-white' : 'border-line bg-white hover:border-leaf-500');
  const heading = categories?.find((c) => c.slug === category)?.name || 'All products';

  return (
    <Container className="py-10">
      <h1 className="text-4xl font-semibold">{heading}</h1>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <button type="button" className={chip(!category)} onClick={() => update('category', '')}>All</button>
          {(categories || []).map((c) => (
            <button key={c.slug} type="button" className={chip(category === c.slug)} onClick={() => update('category', c.slug)}>{c.name}</button>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <label htmlFor="sort">Sort by</label>
          <select id="sort" value={sort} onChange={(e) => update('sort', e.target.value)} className="rounded-full border border-line bg-white px-4 py-2">
            {SORT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>
      <div className="mt-8">
        <ProductGrid products={products} loading={loading} error={error} skeletons={8} />
      </div>
    </Container>
  );
}
