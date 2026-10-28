import { cn } from '@/utils/cn';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50';
const variants = {
  primary: 'bg-leaf-600 text-white hover:bg-leaf-700',
  accent: 'bg-marigold-400 text-ink hover:bg-marigold-500',
  outline: 'border border-leaf-600 text-leaf-700 hover:bg-leaf-50',
  light: 'bg-white text-leaf-900 hover:bg-leaf-50',
};
const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-sm', lg: 'px-8 py-3.5 text-base' };

/** Use as <Button as={Link} to="/shop"> to render a router link with button styling. */
export default function Button({ as: Tag = 'button', variant = 'primary', size = 'md', className = '', ...props }) {
  const extra = Tag === 'button' && !props.type ? { type: 'button' } : {};
  return <Tag className={cn(base, variants[variant], sizes[size], className)} {...extra} {...props} />;
}
