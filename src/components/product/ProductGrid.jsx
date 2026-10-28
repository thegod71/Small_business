import ProductCard from './ProductCard';

const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="aspect-square rounded-2xl bg-leaf-100" />
    <div className="mt-3 h-4 w-3/4 rounded bg-leaf-100" />
    <div className="mt-2 h-4 w-1/3 rounded bg-leaf-100" />
  </div>
);

export default function ProductGrid({ products, loading, error, skeletons = 4 }) {
  const grid = 'grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4';
  if (loading) return <div className={grid}>{Array.from({ length: skeletons }, (_, i) => <SkeletonCard key={i} />)}</div>;
  if (error) return <p className="text-rani-600">We could not load products. Please refresh the page.</p>;
  if (!products?.length) return <p className="text-muted">No products here yet. Try another category.</p>;
  return <div className={grid}>{products.map((p) => <ProductCard key={p.slug} product={p} />)}</div>;
}
