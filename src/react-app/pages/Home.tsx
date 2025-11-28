import Navbar from '@/react-app/components/Navbar';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';
import Testimonials from '@/react-app/components/Testimonials';
import Footer from '@/react-app/components/Footer';
import FloatingButton from '@/react-app/components/FloatingButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
      <FloatingButton />
    </div>
  );
}
