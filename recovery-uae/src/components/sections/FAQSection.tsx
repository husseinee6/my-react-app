import React, { useState } from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import { ChevronDown, Plus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#e63946]/10 text-[#e63946] font-semibold px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(t, 'faq.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTranslation(t, 'faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion */}
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            {language === 'ar'
              ? 'هل لديك سؤال آخر؟'
              : 'Have another question?'}
          </p>
          <a
            href={language === 'ar' ? '/ar/contact' : '/en/contact'}
            className="inline-flex items-center gap-2 bg-[#e63946] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d32f2f] transition"
          >
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            <Plus className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;