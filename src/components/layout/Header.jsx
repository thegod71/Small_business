import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '@/config/site';
import { useCart } from '@/context/CartContext';
import { CartIcon, CloseIcon, MenuIcon } from '@/components/ui/Icons';
import Container from '@/components/ui/Container';
import AnnouncementBar from './AnnouncementBar';
import Logo from './Logo';

const linkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-leaf-600 ${isActive ? 'text-leaf-600' : 'text-ink'}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ivory/95 backdrop-blur">
      <AnnouncementBar />
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <button type="button" onClick={openCart} className="relative rounded-full p-2 hover:bg-leaf-50" aria-label={`Open cart, ${count} items`}>
            <CartIcon />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-rani-500 px-1 text-xs font-medium text-white">{count}</span>
            )}
          </button>
          <button type="button" onClick={() => setMenuOpen((o) => !o)} className="rounded-full p-2 hover:bg-leaf-50 md:hidden" aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>
      {menuOpen && (
        <nav aria-label="Mobile" className="border-t border-line bg-ivory md:hidden">
          <Container className="flex flex-col py-2">
            {NAV_LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className={(s) => `${linkClass(s)} py-3`}>{l.label}</NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  );
}
