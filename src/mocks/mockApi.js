import { products } from './data/products';
import { categories } from './data/categories';
import { services } from './data/services';
import { corporateOffers } from './data/corporate';
import { testimonials } from './data/testimonials';

/** Simulates a network call. Always returns a copy so callers can't mutate the source data. */
const respond = (data, ms = 250) => new Promise((resolve) => setTimeout(() => resolve(structuredClone(data)), ms));

const sorters = {
  'price-asc': (a, b) => a.price - b.price,
  'price-desc': (a, b) => b.price - a.price,
};

export const mockApi = {
  getProducts({ category, sort, featured, limit } = {}) {
    let list = [...products];
    if (category) list = list.filter((p) => p.category === category);
    if (featured) list = list.filter((p) => p.featured);
    if (sorters[sort]) list.sort(sorters[sort]);
    if (limit) list = list.slice(0, limit);
    return respond(list);
  },
  getProductBySlug(slug) {
    const found = products.find((p) => p.slug === slug);
    return found ? respond(found) : Promise.reject(new Error('Product not found'));
  },
  getCategories: () => respond(categories, 100),
  getServices: () => respond(services),
  getCorporateOffers: () => respond(corporateOffers),
  getTestimonials: () => respond(testimonials),
  submitEnquiry: (payload) => respond({ ok: true, id: `ENQ-${Date.now()}`, payload }, 700),
  subscribeNewsletter: (email) => respond({ ok: true, email }, 500),
};
