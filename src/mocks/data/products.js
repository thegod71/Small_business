/**
 * Dummy catalogue. The shape below is the contract the future backend should return.
 * Optional `image`: a URL such as /images/money-plant.jpg. Without it a tinted emoji is shown.
 */
const defaults = { image: null, inStock: true, featured: false, badge: null, mrp: null };
const item = (data) => ({ ...defaults, ...data });

export const products = [
  item({ slug: 'money-plant-ceramic-pot', name: 'Money plant in ceramic pot', category: 'plants', price: 399, mrp: 499, emoji: '🪴', tint: '#D9EADF', featured: true, badge: 'Bestseller', description: 'A hardy money plant in a white ceramic pot. Grows happily in low light and is hard to kill, which makes it a good first plant.' }),
  item({ slug: 'snake-plant-laurentii', name: 'Snake plant Laurentii', category: 'plants', price: 549, mrp: 649, emoji: '🌿', tint: '#CFE8D8', featured: true, description: 'Upright, golden-edged leaves that clean the air and need water only once every two weeks.' }),
  item({ slug: 'tulsi-plant', name: 'Tulsi (holy basil) plant', category: 'plants', price: 249, emoji: '🌱', tint: '#DDEFD2', featured: true, badge: 'Pooja favourite', description: 'A healthy Rama tulsi in a terracotta pot, ready for your courtyard, balcony or window.' }),
  item({ slug: 'red-rose-bouquet-24', name: 'Red rose bouquet, 24 stems', category: 'flowers', price: 1199, mrp: 1399, emoji: '🌹', tint: '#F8CFDF', featured: true, badge: 'Bestseller', description: 'Long-stem red roses hand-tied with green fillers and wrapped in kraft paper.' }),
  item({ slug: 'marigold-rose-festive-bouquet', name: 'Marigold and rose festive bouquet', category: 'flowers', price: 799, emoji: '🌼', tint: '#FCE7A6', featured: true, badge: 'Festive', description: 'Bright genda and pink roses in a bouquet made for Diwali, weddings and housewarmings.' }),
  item({ slug: 'lily-carnation-bouquet', name: 'Lily and carnation bouquet', category: 'flowers', price: 1499, emoji: '💐', tint: '#F6DCEB', description: 'Soft pink lilies and carnations with eucalyptus. Fragrant and long lasting.' }),
  item({ slug: 'orchid-vase-arrangement', name: 'Orchid vase arrangement', category: 'flowers', price: 1899, emoji: '🌸', tint: '#EBDDF3', inStock: false, description: 'Purple orchid stems in a glass vase. Currently out of stock.' }),
  item({ slug: 'genda-phool-garland', name: 'Genda phool garland, 1 metre', category: 'pooja', price: 149, emoji: '🏵️', tint: '#FFE9A8', featured: true, description: 'Thick marigold garland for doors, deities and celebrations.' }),
  item({ slug: 'daily-pooja-flower-box', name: 'Daily pooja flower box', category: 'pooja', price: 199, emoji: '🌺', tint: '#FBD7C7', description: 'Hibiscus, jasmine, marigold and tulsi leaves packed fresh each morning.' }),
  item({ slug: 'lotus-set-of-5', name: 'Kamal (lotus), set of 5', category: 'pooja', price: 349, emoji: '🪷', tint: '#F8D6E4', description: 'Five fresh lotus flowers with buds, delivered in a water-safe box.' }),
  item({ slug: 'diwali-plant-hamper', name: 'Diwali plant hamper', category: 'gifting', price: 1299, mrp: 1599, emoji: '🎁', tint: '#EFDDF3', featured: true, badge: 'Gift favourite', description: 'A jade plant, a brass diya, dry fruits and a handwritten card in a reusable jute box.' }),
  item({ slug: 'jade-plant-gift-set', name: 'Jade plant gift set', category: 'gifting', price: 899, emoji: '🌳', tint: '#D5EBDD', description: 'Lucky jade plant in a designer pot with a care card and gift wrap.' }),
  item({ slug: 'terracotta-pot-set-3', name: 'Terracotta pot set of 3', category: 'planters', price: 599, mrp: 749, emoji: '🏺', tint: '#F6DCC8', description: 'Hand-finished terracotta pots in three sizes with drainage holes and saucers.' }),
  item({ slug: 'hanging-macrame-planter', name: 'Hanging macrame planter', category: 'planters', price: 449, emoji: '🧶', tint: '#F1E6D3', description: 'Cotton macrame hanger with a ceramic pot, made for balcony railings.' }),
  item({ slug: 'self-watering-planter', name: 'Self-watering planter', category: 'planters', price: 699, emoji: '💧', tint: '#D8EAF3', description: 'A planter with a hidden water reservoir that keeps plants fed for up to two weeks.' }),
];
