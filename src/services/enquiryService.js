import { http, isApiConfigured as live } from './httpClient';
import { mockApi } from '@/mocks/mockApi';

export const submitEnquiry = (payload) => (live ? http.post('/enquiries', payload) : mockApi.submitEnquiry(payload));
export const subscribeNewsletter = (email) => (live ? http.post('/newsletter', { email }) : mockApi.subscribeNewsletter(email));

/*
 * Future: add orderService.js (createOrder) and paymentService.js (create Razorpay/UPI payment,
 * verify payment) next to these files. Pages never call fetch directly.
 */
