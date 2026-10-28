import Container from '@/components/ui/Container';
import NewsletterForm from '@/components/forms/NewsletterForm';

export default function NewsletterSection() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold">Festive offers in your inbox</h2>
          <p className="mt-2 text-muted">Diwali, Raksha Bandhan, weddings. We will tell you before the rush.</p>
        </div>
        <NewsletterForm />
      </Container>
    </section>
  );
}
