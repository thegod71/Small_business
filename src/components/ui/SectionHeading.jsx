import { Link } from 'react-router-dom';

export default function SectionHeading({ title, text, actionLabel, actionTo }) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div className="max-w-xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
        {text && <p className="mt-2 text-muted">{text}</p>}
      </div>
      {actionLabel && (
        <Link to={actionTo} className="text-sm font-medium text-leaf-700 underline underline-offset-4 hover:text-leaf-900">
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
