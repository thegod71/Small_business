import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAsync from '@/hooks/useAsync';
import { getCategories, getProductBySlug, getProducts } from '@/services/catalogService';
import { useCart } from '@/context/CartContext';
import { discountPercent, formatPrice } from '@/utils/formatPrice';
import { SITE } from '@/config/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import ProductImage from '@/components/ui/ProductImage';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductGrid from '@/components/product/ProductGrid';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  const { data: product, loading, error } = useAsync(() => getProductBySlug(slug), [slug]);
  const { data: categories } = useAsync(getCategories, []);
  const { data: related } = useAsync(
    () => (product ? getProducts({ category: product.category, limit: 5 }) : Promise.resolve([])),
    [product?.slug],
  );

  if (loading) return <Container className="py-16 text-muted">Loading...</Container>;
  if (error || !product) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-semibold">We could not find that product</h1>
        <Button as={Link} to="/shop" className="mt-6">Back to the shop</Button>
      </Container>
    );
  }

  const category = categories?.find((c) => c.slug === product.category);
  const off = discountPercent(product.price, product.mrp);
  const otherProducts = (related || []).filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <Container className="py-10">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        {category && <> / <Link to={`/shop?category=${category.slug}`} className="hover:text-ink">{category.name}</Link></>}
      </nav>

      <div className="grid gap-10 md:grid-cols-2">
        <ProductImage item={product} className="aspect-square w-full [&>span]:text-9xl" />
        <div>
          <h1 className="text-3xl font-semibold sm:text-4xl">{product.name}</h1>
          <p className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-medium">{formatPrice(product.price)}</span>
            {off > 0 && (
              <>
                <span className="text-muted line-through">{formatPrice(product.mrp)}</span>
                <span className="font-medium text-leaf-600">{off}% off</span>
              </>
            )}
          </p>
          <p className="mt-1 text-sm text-muted">Inclusive of all taxes.</p>
          <p className="mt-5 max-w-prose leading-relaxed">{product.description}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-full border border-line bg-white">
              <button type="button" className="px-4 py-2" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">-</button>
              <span className="min-w-8 text-center">{qty}</span>
              <button type="button" className="px-4 py-2" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">+</button>
            </div>
            <Button size="lg" disabled={!product.inStock} onClick={() => addItem(product, qty)}>
              {product.inStock ? 'Add to cart' : 'Out of stock'}
            </Button>
          </div>

          <ul className="mt-8 space-y-2 text-sm text-muted">
            <li>Same-day delivery on orders before 2 PM.</li>
            <li>Free delivery above {formatPrice(SITE.freeDeliveryAbove)}.</li>
          </ul>

          {category?.careTips?.length > 0 && (
            <div className="mt-8 rounded-2xl bg-leaf-50 p-5">
              <h2 className="font-sans text-lg font-medium">Care tips</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {category.careTips.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>

      {otherProducts.length > 0 && (
        <section className="mt-16">
          <SectionHeading title="You may also like" />
          <ProductGrid products={otherProducts} />
        </section>
      )}
    </Container>
  );
}
