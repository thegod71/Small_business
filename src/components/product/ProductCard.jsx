import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { discountPercent, formatPrice } from '@/utils/formatPrice';
import ProductImage from '@/components/ui/ProductImage';
import Button from '@/components/ui/Button';

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const off = discountPercent(product.price, product.mrp);

  return (
    <article className="group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative block">
        <ProductImage item={product} className="aspect-square w-full" />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-rani-600">{product.badge}</span>
        )}
      </Link>
      <div className="mt-3 flex flex-1 flex-col">
        <h3 className="font-sans text-base font-medium leading-snug">
          <Link to={`/product/${product.slug}`} className="hover:text-leaf-600">{product.name}</Link>
        </h3>
        <p className="mt-1 flex items-baseline gap-2">
          <span className="font-medium">{formatPrice(product.price)}</span>
          {off > 0 && (
            <>
              <span className="text-sm text-muted line-through">{formatPrice(product.mrp)}</span>
              <span className="text-sm font-medium text-leaf-600">{off}% off</span>
            </>
          )}
        </p>
        <Button size="sm" variant="outline" className="mt-3 self-start" disabled={!product.inStock} onClick={() => addItem(product)}>
          {product.inStock ? 'Add to cart' : 'Out of stock'}
        </Button>
      </div>
    </article>
  );
}
