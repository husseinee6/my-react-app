import React, { useState } from 'react';
import { useLanguage, getTranslation } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import { ChevronDown, Phone, MessageCircle, HelpCircle } from 'lucide-react';

const FAQPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: getTranslation(t, 'faq.q1'),
      a: getTranslation(t, 'faq.a1'),
    },
    {
      q: getTranslation(t, 'faq.q2'),
      a: getTranslation(t, 'faq.a2'),
    },
    {
      q: getTranslation(t, 'faq.q3'),
      a: getTranslation(t, 'faq.a3'),
    },
    {
      q: getTranslation(t, 'faq.q4'),
      a: getTranslation(t, 'faq.a4'),
    },
    {
      q: getTranslation(t, 'faq.q5'),
      a: getTranslation(t, 'faq.a5'),
    },
    {
      q: getTranslation(t, 'faq.q6'),
      a: getTranslation(t, 'faq.a6'),
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/971507245242';
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a0a0a] via-gray-900 to-[#0a0a0a] py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/20 border border-[#e63946]/30 rounded-full px-4 py-2 mb-6">
              <HelpCircle className="w-5 h-5 text-[#e63946]" />
              <span className="text-[#e63946] font-medium">FAQ</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {getTranslation(t, 'faq.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getTranslation(t, 'faq.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-right"
                >
                  <span className="text-lg font-bold text-gray-900 flex-1 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      openIndex === index
                        ? 'bg-[#e63946] text-white rotate-180'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'لا تجد إجابة لسؤالك؟' : 'Didn\'t find the answer to your question?'}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === 'ar'
                ? 'تواصل معنا مباشرة وسنجيب على جميع استفساراتك'
                : 'Contact us directly and we will answer all your inquiries'}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleCall}
                className="bg-[#e63946] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d32f2f] transition flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                {getTranslation(t, 'cta.call')}
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {getTranslation(t, 'cta.whatsapp')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default FAQPage;