import { SITE } from '@/config/site';
import Container from '@/components/ui/Container';
import EnquiryForm from '@/components/forms/EnquiryForm';

export default function ContactPage() {
  return (
    <Container className="grid gap-12 py-10 lg:grid-cols-2">
      <div>
        <h1 className="text-4xl font-semibold">Contact us</h1>
        <p className="mt-3 max-w-md text-muted">Questions about an order, a plant or a garden project? We reply the same day.</p>
        <dl className="mt-8 space-y-5">
          <div><dt className="font-medium">Phone and WhatsApp</dt><dd className="text-muted"><a href={`https://wa.me/${SITE.whatsapp}`} className="underline">{SITE.phone}</a></dd></div>
          <div><dt className="font-medium">Email</dt><dd className="text-muted">{SITE.email}</dd></div>
          <div><dt className="font-medium">Visit our nursery</dt><dd className="text-muted">{SITE.address}</dd></div>
          <div><dt className="font-medium">Opening hours</dt><dd className="text-muted">{SITE.hours.map((h) => <span key={h} className="block">{h}</span>)}</dd></div>
        </dl>
      </div>
      <EnquiryForm />
    </Container>
  );
}
