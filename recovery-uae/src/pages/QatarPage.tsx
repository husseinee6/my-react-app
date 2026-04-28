import React from 'react';
import { useLanguage, getTranslation } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import { Truck, MapPin, Phone, MessageCircle, Clock, Shield, CheckCircle, ArrowRight, Star } from 'lucide-react';

const QatarPage: React.FC = () => {
  const { t, language } = useLanguage();

  const routes = [
    { from: language === 'ar' ? 'أبوظبي' : 'Abu Dhabi', to: language === 'ar' ? 'الدوحة' : 'Doha' },
    { from: language === 'ar' ? 'دبي' : 'Dubai', to: language === 'ar' ? 'الدوحة' : 'Doha' },
    { from: language === 'ar' ? 'الشارقة' : 'Sharjah', to: language === 'ar' ? 'الخور' : 'Al Khor' },
    { from: language === 'ar' ? 'أبوظبي' : 'Abu Dhabi', to: language === 'ar' ? 'الريان' : 'Al Rayyan' },
  ];

  const features = [
    { icon: Shield, title: language === 'ar' ? 'تأمين شامل' : 'Full Insurance', desc: language === 'ar' ? 'سيارتك مؤمنة طوال الرحلة' : 'Your vehicle insured during trip' },
    { icon: Clock, title: language === 'ar' ? 'توصيل سريع' : 'Fast Delivery', desc: language === 'ar' ? 'خلال 2-4 أيام عمل' : 'Within 2-4 business days' },
    { icon: MapPin, title: language === 'ar' ? 'تتبع GPS' : 'GPS Tracking', desc: language === 'ar' ? 'تابع سيارتك في الوقت الفعلي' : 'Track your vehicle in real-time' },
    { icon: Truck, title: language === 'ar' ? 'سطحات مغلقة' : 'Enclosed Carriers', desc: language === 'ar' ? 'نقل آمن ومحتكر' : 'Safe and secured transport' },
  ];

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
              <Truck className="w-5 h-5 text-[#e63946]" />
              <span className="text-[#e63946] font-medium">
                {language === 'ar' ? 'شحن إقليمي' : 'Regional Shipping'}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {getTranslation(t, 'qatar.pageTitle')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {getTranslation(t, 'qatar.pageSubtitle')}
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
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed text-center mb-16">
              {getTranslation(t, 'qatar.pageDescription')}
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-[#e63946] rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {getTranslation(t, 'qatar.routesTitle')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {routes.map((route, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#e63946]" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{route.from}</div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                      <span>{route.to}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#e63946] to-[#d32f2f]">
        <div className="container mx-auto px-4 text-center">
          <Star className="w-16 h-16 mx-auto mb-6 text-white/20" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {getTranslation(t, 'qatar.ctaTitle')}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'احصل على عرض سعر مجاني للشحن من الإمارات إلى قطر'
              : 'Get a free quote for shipping from UAE to Qatar'}
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
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {getTranslation(t, 'qatar.faqTitle')}
            </h2>
            <div className="space-y-4">
              {[
                { q: language === 'ar' ? 'كم يستغرق الشحن من الإمارات لقطر؟' : 'How long does shipping from UAE to Qatar take?', a: language === 'ar' ? '2-4 أيام عمل عادة' : 'Usually 2-4 business days' },
                { q: language === 'ar' ? 'ما هي الإجراءات الجمركية؟' : 'What are the customs procedures?', a: language === 'ar' ? 'نتولى جميع الإجراءات الجمركية' : 'We handle all customs procedures' },
                { q: language === 'ar' ? 'هل السيارة مؤمنة أثناء النقل؟' : 'Is the vehicle insured during transport?', a: language === 'ar' ? 'نعم، نقدم تأمين شامل لجميع المركبات' : 'Yes, we provide full insurance for all vehicles' },
                { q: language === 'ar' ? 'هل يمكنني تتبع سيارتي؟' : 'Can I track my vehicle?', a: language === 'ar' ? 'نعم، نوفر تتبع GPS في الوقت الفعلي' : 'Yes, we provide real-time GPS tracking' },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
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

export default QatarPage;