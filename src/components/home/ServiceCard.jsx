import { Link } from 'react-router-dom';
import { formatPrice } from '@/utils/formatPrice';

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col rounded-2xl border border-line bg-white p-6">
      <span className="text-4xl" aria-hidden="true">{service.emoji}</span>
      <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
      <p className="mt-2 flex-1 text-muted">{service.text}</p>
      <p className="mt-4 text-sm">From <span className="font-medium">{formatPrice(service.startingPrice)}</span> {service.unit}</p>
      <Link to="/services#enquiry" className="mt-3 text-sm font-medium text-leaf-700 underline underline-offset-4">Request a quote</Link>
    </div>
  );
}
