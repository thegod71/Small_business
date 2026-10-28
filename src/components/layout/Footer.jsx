import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE } from '@/config/site';
import Container from '@/components/ui/Container';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-leaf-900 text-white/80">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-3 text-sm">{SITE.tagline}. Grown with care, delivered with a smile.</p>
          <a href={`https://wa.me/${SITE.whatsapp}`} className="mt-4 inline-block text-sm font-medium text-marigold-400 hover:underline">Chat on WhatsApp</a>
        </div>
        <div>
          <h3 className="font-sans text-base font-medium text-white">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-sans text-base font-medium text-white">We deliver to</h3>
          <p className="mt-3 text-sm">{SITE.deliveryCities.join(', ')}</p>
          <h3 className="mt-6 font-sans text-base font-medium text-white">Opening hours</h3>
          <ul className="mt-3 space-y-1 text-sm">{SITE.hours.map((h) => <li key={h}>{h}</li>)}</ul>
        </div>
        <div>
          <h3 className="font-sans text-base font-medium text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>{SITE.address}</li>
            <li><a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="hover:text-white">{SITE.phone}</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs">&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
    </footer>
  );
}
