import useAsync from '@/hooks/useAsync';
import { getServices } from '@/services/catalogService';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/home/ServiceCard';

export default function ServicesSection() {
  const { data } = useAsync(getServices, []);
  return (
    <section className="py-12">
      <Container>
        <SectionHeading title="Garden services" text="From a balcony makeover to a full lawn, our gardeners do the work." actionLabel="View all services" actionTo="/services" />
        <div className="grid gap-5 md:grid-cols-3">
          {(data || []).slice(0, 3).map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>
      </Container>
    </section>
  );
}
