import useAsync from '@/hooks/useAsync';
import { getServices } from '@/services/catalogService';
import Container from '@/components/ui/Container';
import ServiceCard from '@/components/home/ServiceCard';
import EnquiryForm from '@/components/forms/EnquiryForm';

export default function ServicesPage() {
  const { data, loading } = useAsync(getServices, []);
  return (
    <Container className="py-10">
      <h1 className="text-4xl font-semibold">Garden services</h1>
      <p className="mt-3 max-w-2xl text-muted">Tell us about your space and we will visit, suggest plants and share a clear quote. Prices below are starting points.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {loading && <p className="text-muted">Loading services...</p>}
        {(data || []).map((s) => <ServiceCard key={s.id} service={s} />)}
      </div>
      <div id="enquiry" className="mx-auto mt-16 max-w-2xl">
        <EnquiryForm defaultType="service" title="Request a quote" />
      </div>
    </Container>
  );
}
