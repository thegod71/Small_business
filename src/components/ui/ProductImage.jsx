import { useState } from 'react';
import { cn } from '@/utils/cn';

/**
 * Shows item.image when present, otherwise a tinted emoji tile.
 * Works for products, categories and hero tiles. `arch` gives the jharokha (arched window) shape.
 */
export default function ProductImage({ item, arch = false, className = '' }) {
  const [failed, setFailed] = useState(false);
  const showImage = item.image && !failed;
  return (
    <div
      className={cn(
        'flex items-center justify-center overflow-hidden',
        arch ? 'rounded-b-2xl rounded-t-[999px]' : 'rounded-2xl',
        className,
      )}
      style={{ backgroundColor: item.tint }}
    >
      {showImage ? (
        <img src={item.image} alt={item.name || item.label || ''} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover" />
      ) : (
        <span className="text-6xl" aria-hidden="true">{item.emoji}</span>
      )}
    </div>
  );
}
