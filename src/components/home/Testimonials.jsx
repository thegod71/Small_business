import useAsync from '@/hooks/useAsync';
import { getTestimonials } from '@/services/catalogService';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  const { data } = useAsync(getTestimonials, []);
  return (
    <section className="bg-rani-50 py-14">
      <Container>
        <SectionHeading title="Kind words from our customers" />
        <div className="grid gap-5 md:grid-cols-3">
          {(data || []).map((t) => (
            <figure key={t.id} className="rounded-2xl bg-white p-6">
              <blockquote className="text-lg leading-relaxed">{t.text}</blockquote>
              <figcaption className="mt-4 text-sm text-muted">{t.name}, {t.city}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
