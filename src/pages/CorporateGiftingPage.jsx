import useAsync from '@/hooks/useAsync';
import { getCorporateOffers } from '@/services/catalogService';
import Container from '@/components/ui/Container';
import EnquiryForm from '@/components/forms/EnquiryForm';

export default function CorporateGiftingPage() {
  const { data, loading } = useAsync(getCorporateOffers, []);
  return (
    <>
      <section className="bg-jaali-dark bg-leaf-900 py-16 text-white">
        <Container>
          <h1 className="max-w-2xl text-4xl font-semibold text-white sm:text-5xl">Corporate gifting with plants and flowers</h1>
          <p className="mt-4 max-w-xl text-white/80">Custom branding, bulk pricing, GST invoices and delivery to every office or home on your list.</p>
        </Container>
      </section>
      <Container className="py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {loading && <p className="text-muted">Loading...</p>}
          {(data || []).map((o) => (
            <div key={o.id} className="rounded-2xl border border-line bg-white p-6">
              <span className="text-4xl" aria-hidden="true">{o.emoji}</span>
              <h2 className="mt-4 font-sans text-lg font-medium">{o.title}</h2>
              <p className="mt-2 text-sm text-muted">{o.text}</p>
              <p className="mt-3 text-sm font-medium text-leaf-700">Minimum {o.minQty} {o.minQty === 1 ? 'order' : 'pieces'}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <EnquiryForm defaultType="corporate" title="Get a bulk quote" />
        </div>
      </Container>
    </>
  );
}
