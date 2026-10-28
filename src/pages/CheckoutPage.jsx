import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/utils/formatPrice';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

/**
 * Placeholder. When payments are added:
 * 1. collect address and delivery slot here,
 * 2. call orderService.createOrder(items) -> backend returns an order id,
 * 3. open the payment gateway (Razorpay / UPI) with that order id,
 * 4. verify the payment on the backend, then clear() the cart.
 */
export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  return (
    <Container className="max-w-2xl py-12">
      <h1 className="text-4xl font-semibold">Checkout</h1>
      {items.length === 0 ? (
        <>
          <p className="mt-4 text-muted">Your cart is empty.</p>
          <Button as={Link} to="/shop" className="mt-6">Browse the shop</Button>
        </>
      ) : (
        <>
          <ul className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
            {items.map((i) => (
              <li key={i.slug} className="flex justify-between p-4"><span>{i.name} x {i.qty}</span><span>{formatPrice(i.price * i.qty)}</span></li>
            ))}
            <li className="flex justify-between p-4 text-lg font-medium"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></li>
          </ul>
          <p className="mt-6 rounded-2xl bg-marigold-100 p-4 text-sm">Online payment is coming soon. For now, please place your order on WhatsApp or by phone.</p>
        </>
      )}
    </Container>
  );
}
