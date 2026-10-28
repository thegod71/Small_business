import { useState } from 'react';
import { submitEnquiry } from '@/services/enquiryService';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';

const TYPES = [
  { value: 'general', label: 'General question' },
  { value: 'service', label: 'Garden service' },
  { value: 'event', label: 'Wedding or event flowers' },
  { value: 'corporate', label: 'Corporate gifting' },
];
const INITIAL = { name: '', phone: '', email: '', type: 'general', company: '', quantity: '', message: '' };
const PHONE_RE = /^[6-9]\d{9}$/; // 10-digit Indian mobile number

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Enter your name.';
  if (!PHONE_RE.test(values.phone.replace(/^\+?91/, '').replace(/\s|-/g, ''))) errors.phone = 'Enter a 10-digit mobile number.';
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'Enter a valid email address.';
  if (!values.message.trim()) errors.message = 'Tell us what you need.';
  return errors;
}

export default function EnquiryForm({ defaultType = 'general', title = 'Send us a message' }) {
  const [values, setValues] = useState({ ...INITIAL, type: defaultType });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | done | error

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus('sending');
    try {
      await submitEnquiry(values);
      setStatus('done');
      setValues({ ...INITIAL, type: defaultType });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="rounded-2xl bg-leaf-50 p-8">
        <h3 className="text-2xl font-semibold">Thank you, we got your message.</h3>
        <p className="mt-2 text-muted">Our team will call you within one working day.</p>
        <Button variant="outline" className="mt-5" onClick={() => setStatus('idle')}>Send another message</Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-2xl border border-line bg-white p-6 sm:p-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" id="name" value={values.name} onChange={onChange} error={errors.name} autoComplete="name" />
        <Field label="Mobile number" id="phone" type="tel" value={values.phone} onChange={onChange} error={errors.phone} autoComplete="tel" placeholder="98765 43210" />
        <Field label="Email (optional)" id="email" type="email" value={values.email} onChange={onChange} error={errors.email} autoComplete="email" />
        <Field label="What is this about?" id="type" as="select" value={values.type} onChange={onChange}>
          {TYPES.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </Field>
        {values.type === 'corporate' && (
          <>
            <Field label="Company name" id="company" value={values.company} onChange={onChange} />
            <Field label="Approximate quantity" id="quantity" type="number" min="1" value={values.quantity} onChange={onChange} />
          </>
        )}
      </div>
      <Field label="Message" id="message" as="textarea" rows={4} value={values.message} onChange={onChange} error={errors.message} />
      {status === 'error' && <p className="text-sm text-rani-600">Something went wrong. Please try again or message us on WhatsApp.</p>}
      <Button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending...' : 'Send message'}</Button>
    </form>
  );
}
