import { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';

const STORAGE_KEY = 'phoolwari_cart_v1';
const CartContext = createContext(null);

const load = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
};

function reducer(items, action) {
  switch (action.type) {
    case 'add': {
      const { product, qty } = action;
      if (items.some((i) => i.slug === product.slug)) {
        return items.map((i) => (i.slug === product.slug ? { ...i, qty: i.qty + qty } : i));
      }
      const { slug, name, price, emoji, tint, image } = product;
      return [...items, { slug, name, price, emoji, tint, image, qty }];
    }
    case 'setQty':
      return action.qty <= 0
        ? items.filter((i) => i.slug !== action.slug)
        : items.map((i) => (i.slug === action.slug ? { ...i, qty: action.qty } : i));
    case 'remove':
      return items.filter((i) => i.slug !== action.slug);
    case 'clear':
      return [];
    default:
      return items;
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, undefined, load);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* storage unavailable, cart stays in memory */
    }
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((sum, i) => sum + i.price * i.qty, 0),
      addItem: (product, qty = 1) => {
        dispatch({ type: 'add', product, qty });
        setIsOpen(true);
      },
      setQty: (slug, qty) => dispatch({ type: 'setQty', slug, qty }),
      removeItem: (slug) => dispatch({ type: 'remove', slug }),
      clear: () => dispatch({ type: 'clear' }),
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [items, isOpen],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
