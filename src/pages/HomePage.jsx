import Hero from '@/components/home/Hero';
import CategoryStrip from '@/components/home/CategoryStrip';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import ServicesSection from '@/components/home/ServicesSection';
import CorporateBanner from '@/components/home/CorporateBanner';
import Benefits from '@/components/home/Benefits';
import Testimonials from '@/components/home/Testimonials';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <FeaturedProducts />
      <ServicesSection />
      <CorporateBanner />
      <Benefits />
      <Testimonials />
      <NewsletterSection />
    </>
  );
}
