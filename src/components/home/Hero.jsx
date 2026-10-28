import { Link } from 'react-router-dom';
import { HERO_TILES } from '@/config/site';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import ProductImage from '@/components/ui/ProductImage';

export default function Hero() {
  return (
    <section className="bg-jaali-light bg-leaf-50">
      <Container className="grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          <p className="font-display text-xl text-rani-500" lang="hi">हर मौके के लिए फूल और पौधे</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Fresh flowers, healthy plants and gardens that feel like home.
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted">
            Order bouquets, pooja flowers and indoor plants online, or book our gardeners to set up and care for your space.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as={Link} to="/shop" size="lg">Shop now</Button>
            <Button as={Link} to="/services" size="lg" variant="outline">Book a garden service</Button>
          </div>
        </div>
        <div className="grid grid-cols-3 items-end gap-3 sm:gap-4">
          {HERO_TILES.map((tile, i) => (
            <figure key={tile.label}>
              <ProductImage item={tile} arch className={i === 1 ? 'h-72 w-full sm:h-96' : 'h-56 w-full sm:h-72'} />
              <figcaption className="mt-2 text-center text-xs text-muted sm:text-sm">{tile.label}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
