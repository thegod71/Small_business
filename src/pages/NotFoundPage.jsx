import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFoundPage() {
  return (
    <Container className="py-20 text-center">
      <h1 className="text-5xl font-semibold">Page not found</h1>
      <p className="mt-3 text-muted">The page you are looking for has moved or does not exist.</p>
      <Button as={Link} to="/" className="mt-8">Go to home</Button>
    </Container>
  );
}
