import { Link } from 'react-router-dom';
import { SITE } from '@/config/site';

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`flex items-baseline gap-2 ${light ? 'text-white' : 'text-leaf-900'}`}>
      <span className="font-display text-2xl font-semibold">{SITE.name}</span>
      <span className={`font-display text-lg ${light ? 'text-marigold-400' : 'text-rani-500'}`} lang="hi">{SITE.nameHindi}</span>
    </Link>
  );
}
