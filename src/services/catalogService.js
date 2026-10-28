/**
 * Every read the UI needs goes through here.
 * No VITE_API_BASE_URL -> dummy data. With it -> your backend (expected endpoints in README).
 */
import { http, isApiConfigured as live } from './httpClient';
import { mockApi } from '@/mocks/mockApi';

export const getProducts = (params) => (live ? http.get('/products', params) : mockApi.getProducts(params));
export const getProductBySlug = (slug) => (live ? http.get(`/products/${slug}`) : mockApi.getProductBySlug(slug));
export const getCategories = () => (live ? http.get('/categories') : mockApi.getCategories());
export const getServices = () => (live ? http.get('/services') : mockApi.getServices());
export const getCorporateOffers = () => (live ? http.get('/corporate-offers') : mockApi.getCorporateOffers());
export const getTestimonials = () => (live ? http.get('/testimonials') : mockApi.getTestimonials());
