import { BENEFITS } from '@/config/site';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Benefits() {
  return (
    <section className="py-12">
      <Container>
        <SectionHeading title="Why people choose Phoolwari" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.title} className="border-l-4 border-marigold-400 pl-4">
              <h3 className="font-sans text-lg font-medium">{b.title}</h3>
              <p className="mt-1 text-muted">{b.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
