import { cn } from '@/utils/cn';

const fieldStyles =
  'w-full rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/70 focus:border-leaf-500';

/** Label + input / select / textarea. Use as="select" or as="textarea". */
export default function Field({ label, id, as: Tag = 'input', error, className = '', children, ...props }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">{label}</label>
      <Tag id={id} name={id} className={cn(fieldStyles, error && 'border-rani-500')} {...props}>
        {children}
      </Tag>
      {error && <p className="mt-1 text-sm text-rani-600">{error}</p>}
    </div>
  );
}
