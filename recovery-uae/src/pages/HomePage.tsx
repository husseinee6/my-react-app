import React from 'react';
import { useLanguage } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import AreasSection from '../components/sections/AreasSection';
import TrustStatsSection from '../components/sections/TrustStatsSection';
import FAQSection from '../components/sections/FAQSection';
import ContactForm from '../components/sections/ContactForm';

const HomePage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AreasSection />
        <TrustStatsSection />
        <FAQSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
      {/* Bottom padding for mobile nav bar */}
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default HomePage;