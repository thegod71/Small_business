import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { SITE } from '@/config/site';
import { formatPrice } from '@/utils/formatPrice';
import Button from '@/components/ui/Button';
import ProductImage from '@/components/ui/ProductImage';
import { CloseIcon } from '@/components/ui/Icons';

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, setQty, removeItem } = useCart();

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeCart();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;
  const toFree = Math.max(0, SITE.freeDeliveryAbove - subtotal);

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="absolute inset-0 bg-ink/40" onClick={closeCart} />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-ivory shadow-xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="text-xl font-semibold">Your cart</h2>
          <button type="button" onClick={closeCart} className="rounded-full p-2 hover:bg-leaf-50" aria-label="Close cart"><CloseIcon /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-muted">Your cart is empty.</p>
            <Button as={Link} to="/shop" onClick={closeCart}>Browse the shop</Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-5 overflow-y-auto p-5">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-4">
                  <ProductImage item={item} className="h-20 w-20 shrink-0 [&>span]:text-3xl" />
                  <div className="flex-1">
                    <p className="font-medium leading-snug">{item.name}</p>
                    <p className="text-sm text-muted">{formatPrice(item.price)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center rounded-full border border-line">
                        <button type="button" className="px-3 py-1" onClick={() => setQty(item.slug, item.qty - 1)} aria-label={`Decrease ${item.name}`}>-</button>
                        <span className="min-w-6 text-center text-sm">{item.qty}</span>
                        <button type="button" className="px-3 py-1" onClick={() => setQty(item.slug, item.qty + 1)} aria-label={`Increase ${item.name}`}>+</button>
                      </div>
                      <button type="button" className="text-sm text-rani-600 hover:underline" onClick={() => removeItem(item.slug)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-line p-5">
              <p className="mb-3 text-sm text-leaf-700">
                {toFree > 0 ? `Add ${formatPrice(toFree)} more for free delivery.` : 'You have free delivery.'}
              </p>
              <div className="mb-4 flex justify-between text-lg font-medium">
                <span>Subtotal</span><span>{formatPrice(subtotal)}</span>
              </div>
              <Button as={Link} to="/checkout" onClick={closeCart} className="w-full">Go to checkout</Button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
