import React from 'react';
import { useLanguage, getTranslation } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import { Shield, Clock, MapPin, Users, Truck, Award, Phone, MessageCircle, Building2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t, language } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/971507245242';
  };

  const features = [
    {
      icon: Clock,
      title: getTranslation(t, 'about.fastResponse'),
      description: getTranslation(t, 'about.fastResponseDesc'),
    },
    {
      icon: Shield,
      title: getTranslation(t, 'about.clearPricing'),
      description: getTranslation(t, 'about.clearPricingDesc'),
    },
    {
      icon: MapPin,
      title: getTranslation(t, 'about.availability'),
      description: getTranslation(t, 'about.availabilityDesc'),
    },
    {
      icon: Users,
      title: getTranslation(t, 'about.coverage'),
      description: getTranslation(t, 'about.coverageDesc'),
    },
    {
      icon: Truck,
      title: getTranslation(t, 'about.professionalDrivers'),
      description: getTranslation(t, 'about.professionalDriversDesc'),
    },
    {
      icon: Award,
      title: getTranslation(t, 'about.safeTransport'),
      description: getTranslation(t, 'about.safeTransportDesc'),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a0a0a] via-gray-900 to-[#0a0a0a] py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {getTranslation(t, 'about.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getTranslation(t, 'about.subtitle')}
            </p>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {language === 'ar' ? 'خبرة تمتد لسنوات في خدمة الإمارات' : 'Years of Experience Serving the UAE'}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {getTranslation(t, 'about.description')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {language === 'ar'
                    ? 'نسخدم أحدث المعدات والتقنيات لضمان نقل آمن ومحترك للسيارات في جميع الظروف. فريقنا مدرب على التعامل مع جميع أنواع السيارات من السيدان العادية إلى السيارات الرياضية الفاخرة.'
                    : 'We use the latest equipment and technologies to ensure safe and secure transport of vehicles in all conditions. Our team is trained to handle all types of vehicles from regular sedans to luxury sports cars.'}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleCall}
                    className="bg-[#e63946] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#d32f2f] transition flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    {getTranslation(t, 'cta.call')}
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {getTranslation(t, 'cta.whatsapp')}
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#e63946] mb-2">10K+</div>
                  <div className="text-gray-600">{getTranslation(t, 'trust.vehiclesRecovered')}</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#e63946] mb-2">24/7</div>
                  <div className="text-gray-600">{getTranslation(t, 'trust.serviceAvailable')}</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#e63946] mb-2">30min</div>
                  <div className="text-gray-600">{getTranslation(t, 'trust.avgResponse')}</div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-bold text-[#e63946] mb-2">100%</div>
                  <div className="text-gray-600">{getTranslation(t, 'trust.satisfaction')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {getTranslation(t, 'trust.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {getTranslation(t, 'trust.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[#e63946]/30 transition-all"
              >
                <div className="w-14 h-14 bg-[#e63946] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services We Provide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {language === 'ar' ? 'من هم عملاؤنا' : 'Who We Serve'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#e63946] to-[#d32f2f] rounded-2xl p-8 text-white text-center">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{language === 'ar' ? 'أفراد' : 'Individuals'}</h3>
              <p className="text-white/80">
                {language === 'ar'
                  ? 'خدمة أصحاب السيارات الشخصية'
                  : 'Service for personal vehicle owners'}
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
              <Building2 className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{language === 'ar' ? 'شركات وورش' : 'Companies & Workshops'}</h3>
              <p className="text-gray-400">
                {language === 'ar'
                  ? 'خدمة الورش ومعارض السيارات'
                  : 'Service for workshops and car dealers'}
              </p>
            </div>
            <div className="bg-gray-900 rounded-2xl p-8 text-white text-center">
              <Truck className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{language === 'ar' ? 'أساطيل' : 'Fleets'}</h3>
              <p className="text-gray-400">
                {language === 'ar'
                  ? 'خدمة شركات النقل والتوصيل'
                  : 'Service for transport and delivery companies'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default AboutPage;