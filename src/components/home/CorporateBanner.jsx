import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function CorporateBanner() {
  return (
    <section className="bg-jaali-dark bg-leaf-900 py-16 text-white">
      <Container className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Corporate gifting that grows</h2>
          <p className="mt-3 max-w-md text-white/80">Plants and hampers for employees, clients and events. Custom branding, bulk pricing and GST invoices.</p>
        </div>
        <div className="md:justify-self-end">
          <Button as={Link} to="/corporate-gifting" variant="accent" size="lg">Get a bulk quote</Button>
        </div>
      </Container>
    </section>
  );
}
