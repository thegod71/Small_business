import { Link } from 'react-router-dom';
import useAsync from '@/hooks/useAsync';
import { getCategories } from '@/services/catalogService';
import Container from '@/components/ui/Container';

export default function CategoryStrip() {
  const { data: categories } = useAsync(getCategories, []);
  return (
    <section className="py-10">
      <Container>
        <ul className="flex gap-5 overflow-x-auto pb-2 sm:justify-center sm:gap-10">
          {(categories || []).map((c) => (
            <li key={c.slug} className="shrink-0">
              <Link to={`/shop?category=${c.slug}`} className="group flex w-24 flex-col items-center gap-2 text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full text-4xl transition-transform group-hover:scale-105" style={{ backgroundColor: c.tint }} aria-hidden="true">{c.emoji}</span>
                <span className="text-sm font-medium">{c.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
