import React from 'react';
import { useLanguage, getTranslation } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import { MapPin, Phone, MessageCircle, Clock, ArrowRight, CheckCircle } from 'lucide-react';

interface AreaPageProps {
  areaId: string;
}

const AreaPage: React.FC<AreaPageProps> = ({ areaId }) => {
  const { t, language } = useLanguage();

  const areasData: { [key: string]: {
    name: string;
    description: string;
    services: string[];
    faqs: { q: string; a: string }[];
  } } = {
    'abu-dhabi': {
      name: getTranslation(t, 'areas.abuDhabi.name'),
      description: getTranslation(t, 'areas.abuDhabi.description'),
      services: language === 'ar'
        ? ['سحب السيارات المعطلة', 'نقل بين المدن', 'سطحات', 'إنقاذ بطارية', 'طوارئ 24/7']
        : ['Broken Down Recovery', 'Inter-City Transport', 'Flatbed Service', 'Battery Jump Start', '24/7 Emergency'],
      faqs: [
        { q: language === 'ar' ? 'كم يستغرق الوقت للوصول؟' : 'How long to reach?', a: language === 'ar' ? 'متوسط 25 دقيقة في أبوظبي' : 'Average 25 minutes in Abu Dhabi' },
        { q: language === 'ar' ? 'هل تخدمون العين؟' : 'Do you serve Al Ain?', a: language === 'ar' ? 'نعم، نغطي العين والمنطقة الشرقية' : 'Yes, we cover Al Ain and Eastern Region' },
      ],
    },
    'dubai': {
      name: getTranslation(t, 'areas.dubai.name'),
      description: getTranslation(t, 'areas.dubai.description'),
      services: language === 'ar'
        ? ['سحب سريع في دبي', 'نقل بين الإمارات', 'سطحات', 'إنقاذ بطارية', 'طوارئ']
        : ['Fast Recovery in Dubai', 'Inter-Emirates Transport', 'Flatbed Service', 'Battery Jump Start', 'Emergency Service'],
      faqs: [
        { q: language === 'ar' ? 'هل تعملون في جميع مناطق دبي؟' : 'Do you work in all Dubai areas?', a: language === 'ar' ? 'نعم، نغطي جميع أحياء دبي' : 'Yes, we cover all Dubai neighborhoods' },
        { q: language === 'ar' ? 'ما هي أوقات الاستجابة؟' : 'What are response times?', a: language === 'ar' ? '15-20 دقيقة في دبي' : '15-20 minutes in Dubai' },
      ],
    },
    'sharjah': {
      name: getTranslation(t, 'areas.sharjah.name'),
      description: getTranslation(t, 'areas.sharjah.description'),
      services: language === 'ar'
        ? ['سحب السيارات', 'نقل السيارات', 'سطحات', 'طوارئ']
        : ['Car Recovery', 'Vehicle Transport', 'Flatbed Service', 'Emergency'],
      faqs: [
        { q: language === 'ar' ? 'هل تخدمون كلباء؟' : 'Do you serve Kalba?', a: language === 'ar' ? 'نعم، نغطي الشارقة وكلباء' : 'Yes, we cover Sharjah and Kalba' },
      ],
    },
    'ajman': {
      name: getTranslation(t, 'areas.ajman.name'),
      description: getTranslation(t, 'areas.ajman.description'),
      services: language === 'ar'
        ? ['سحب السيارات', 'سطحات', 'طوارئ 24/7']
        : ['Car Recovery', 'Flatbed Service', '24/7 Emergency'],
      faqs: [
        { q: language === 'ar' ? 'هل提供服务 في عجمان؟' : 'Service in Ajman?', a: language === 'ar' ? 'نعم، متوفرون في عجمان' : 'Yes, available in Ajman' },
      ],
    },
    'rak': {
      name: getTranslation(t, 'areas.rak.name'),
      description: getTranslation(t, 'areas.rak.description'),
      services: language === 'ar'
        ? ['سحب السيارات', 'نقل', 'طوارئ']
        : ['Car Recovery', 'Transport', 'Emergency'],
      faqs: [
        { q: language === 'ar' ? 'هل تخدمون المناطق الجبلية؟' : 'Do you serve mountain areas?', a: language === 'ar' ? 'نعم،我们有خدمة خاصة للمناطق الجبلية' : 'Yes, we have special service for mountain areas' },
      ],
    },
    'fujairah': {
      name: getTranslation(t, 'areas.fujairah.name'),
      description: getTranslation(t, 'areas.fujairah.description'),
      services: language === 'ar'
        ? ['سحب السيارات', 'المناطق الجبلية', 'طوارئ']
        : ['Car Recovery', 'Mountain Areas', 'Emergency'],
      faqs: [
        { q: language === 'ar' ? 'هل تخدمون الساحل؟' : 'Do you serve the coast?', a: language === 'ar' ? 'نعم، نغطي المناطق الساحلية' : 'Yes, we cover coastal areas' },
      ],
    },
    'uaq': {
      name: getTranslation(t, 'areas.uaq.name'),
      description: getTranslation(t, 'areas.uaq.description'),
      services: language === 'ar'
        ? ['سحب سريع', 'سطحات', 'طوارئ']
        : ['Fast Recovery', 'Flatbed', 'Emergency'],
      faqs: [
        { q: language === 'ar' ? 'ما هو وقت الاستجابة؟' : 'What is response time?', a: language === 'ar' ? 'أقل من 30 دقيقة' : 'Under 30 minutes' },
      ],
    },
    'al-ain': {
      name: getTranslation(t, 'areas.alAin.name'),
      description: getTranslation(t, 'areas.alAin.description'),
      services: language === 'ar'
        ? ['سحب السيارات', 'نقل العين', 'طوارئ']
        : ['Car Recovery', 'Al Ain Transport', 'Emergency'],
      faqs: [
        { q: language === 'ar' ? 'هل تخدمون المناطق الشرقية؟' : 'Do you serve eastern regions?', a: language === 'ar' ? 'نعم، نغطي المناطق الشرقية' : 'Yes, we cover eastern regions' },
      ],
    },
  };

  const area = areasData[areaId] || areasData['dubai'];

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
              <MapPin className="w-5 h-5 text-[#e63946]" />
              <span className="text-[#e63946] font-medium">{language === 'ar' ? 'تغطيتها المحلية' : 'Local Coverage'}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {language === 'ar' ? 'ريكفري وسيطحة في' : 'Recovery & Towing in'} {area.name}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {area.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'ar' ? 'الخدمات المتوفرة في' : 'Services Available in'} {area.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {area.services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-10 h-10 bg-[#e63946]/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-[#e63946]" />
                  </div>
                  <span className="font-medium text-gray-900">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#e63946] to-[#d32f2f] rounded-3xl p-8 md:p-12 text-white text-center">
              <Clock className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                {language === 'ar' ? 'احصل على عرض سعر فوري' : 'Get an Instant Quote'}
              </h2>
              <p className="text-white/80 mb-8">
                {language === 'ar'
                  ? `خدمة سريعة في ${area.name} - نتواصل معك خلال دقائق`
                  : `Fast service in ${area.name} - We will contact you within minutes`}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleCall}
                  className="bg-white text-[#e63946] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition flex items-center gap-3"
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
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {language === 'ar' ? 'أسئلة شائعة عن' : 'FAQ about'} {area.name}
            </h2>
            <div className="space-y-4">
              {area.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AreaPage;