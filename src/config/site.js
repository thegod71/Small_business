/** Business details and navigation. Edit here, never inside components. */
export const SITE = {
  name: 'Phoolwari',
  nameHindi: 'फूलवारी',
  tagline: 'Plants, flowers and garden care',
  announcement: 'Same-day delivery on orders before 2 PM. Free delivery above ₹999.',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
  email: 'hello@phoolwari.example',
  address: '12, Garden Road, Your City, India',
  hours: ['Mon to Sat: 8 am to 8 pm', 'Sunday: 9 am to 2 pm'],
  deliveryCities: ['Mumbai', 'Pune', 'Nashik', 'Nagpur', 'Thane'], // placeholder, replace with yours
  freeDeliveryAbove: 999,
};

export const NAV_LINKS = [
  { label: 'Shop', to: '/shop' },
  { label: 'Garden services', to: '/services' },
  { label: 'Corporate gifting', to: '/corporate-gifting' },
  { label: 'Contact', to: '/contact' },
];

/** Hero tiles. Add an `image` URL (e.g. /images/hero-1.jpg) to replace the emoji. */
export const HERO_TILES = [
  { label: 'Genda and festive blooms', emoji: '🌼', tint: '#FCE7A6', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80' },
  { label: 'Indoor plants', emoji: '🪴', tint: '#CFE8D8', image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80' },
  { label: 'Rose bouquets', emoji: '🌹', tint: '#F8CFDF', image: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=800&q=80' },
];

export const BENEFITS = [
  { title: 'Same-day delivery', text: 'Order before 2 PM and we deliver by evening in our service cities.' },
  { title: 'Fresh from growers', text: 'Flowers and plants come straight from farms and nurseries, not old stock.' },
  { title: '7-day plant guarantee', text: 'If a plant does not settle in, we replace it. No long forms.' },
  { title: 'GST invoice for business', text: 'Bulk and corporate orders get proper invoices and a dedicated contact.' },
];
