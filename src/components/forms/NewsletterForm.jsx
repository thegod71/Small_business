import { useState } from 'react';
import { subscribeNewsletter } from '@/services/enquiryService';
import Button from '@/components/ui/Button';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await subscribeNewsletter(email);
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') return <p className="font-medium text-leaf-700">You are subscribed. Watch your inbox for festive offers.</p>;
  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input id="newsletter-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address"
        className="flex-1 rounded-full border border-line bg-white px-5 py-3 text-sm" />
      <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Subscribing...' : 'Subscribe'}</Button>
      {status === 'error' && <p className="text-sm text-rani-600">Could not subscribe. Try again.</p>}
    </form>
  );
}
