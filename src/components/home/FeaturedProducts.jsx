import useAsync from '@/hooks/useAsync';
import { getProducts } from '@/services/catalogService';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductGrid from '@/components/product/ProductGrid';

export default function FeaturedProducts() {
  const { data, loading, error } = useAsync(() => getProducts({ featured: true, limit: 8 }), []);
  return (
    <section className="py-12">
      <Container>
        <SectionHeading title="Best sellers" text="What our customers order most, fresh every morning." actionLabel="See all products" actionTo="/shop" />
        <ProductGrid products={data} loading={loading} error={error} skeletons={8} />
      </Container>
    </section>
  );
}
