import React from 'react';
import { useLanguage, getTranslation } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import { Wrench, Map, Truck, Battery, CircleDot, AlertTriangle, Building2, Car, Clock4, Phone, MessageCircle, ArrowRight } from 'lucide-react';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  wrench: Wrench,
  map: Map,
  truck: Truck,
  battery: Battery,
  circle: CircleDot,
  alert: AlertTriangle,
  building: Building2,
  car: Car,
  clock: Clock4,
};

const ServicesPage: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 'broken',
      icon: 'wrench',
      title: getTranslation(t, 'services.brokenDown.title'),
      description: getTranslation(t, 'services.brokenDown.description'),
      features: language === 'ar'
        ? ['خدمة سريعة', 'سحب آمن', 'متاح 24/7']
        : ['Fast Service', 'Safe Towing', '24/7 Available'],
    },
    {
      id: 'interEmirates',
      icon: 'map',
      title: getTranslation(t, 'services.interEmirates.title'),
      description: getTranslation(t, 'services.interEmirates.description'),
      features: language === 'ar'
        ? ['نقل بين الإمارات', 'تتبع GPS', 'تأمين كامل']
        : ['Inter-Emirates', 'GPS Tracking', 'Full Insurance'],
    },
    {
      id: 'flatbed',
      icon: 'truck',
      title: getTranslation(t, 'services.flatbed.title'),
      description: getTranslation(t, 'services.flatbed.description'),
      features: language === 'ar'
        ? ['سطحة مسطحة', 'جميع أنواع السيارات', 'نقل آمن']
        : ['Flatbed Truck', 'All Vehicle Types', 'Safe Transport'],
    },
    {
      id: 'battery',
      icon: 'battery',
      title: getTranslation(t, 'services.battery.title'),
      description: getTranslation(t, 'services.battery.description'),
      features: language === 'ar'
        ? ['إنعاش بطارية', 'تبديل بطارية', 'خدمة طوارئ']
        : ['Battery Jump Start', 'Battery Replacement', 'Emergency Service'],
    },
    {
      id: 'tire',
      icon: 'circle',
      title: getTranslation(t, 'services.tire.title'),
      description: getTranslation(t, 'services.tire.description'),
      features: language === 'ar'
        ? ['تبديل الإطارات', 'إصلاح الإطارات', 'خدمة الطريق']
        : ['Tire Change', 'Tire Repair', 'Road Service'],
    },
    {
      id: 'accident',
      icon: 'alert',
      title: getTranslation(t, 'services.accident.title'),
      description: getTranslation(t, 'services.accident.description'),
      features: language === 'ar'
        ? ['إنقاذ السيارات', 'نقل للورش', 'خدمة سريعة']
        : ['Vehicle Rescue', 'Workshop Transport', 'Quick Service'],
    },
    {
      id: 'dealership',
      icon: 'building',
      title: getTranslation(t, 'services.dealership.title'),
      description: getTranslation(t, 'services.dealership.description'),
      features: language === 'ar'
        ? ['نقل المعارض', 'خدمة الوكلاء', 'عقد خاص']
        : ['Dealership Transport', 'Agency Service', 'Special Contract'],
    },
    {
      id: 'luxury',
      icon: 'car',
      title: getTranslation(t, 'services.luxury.title'),
      description: getTranslation(t, 'services.luxury.description'),
      features: language === 'ar'
        ? ['نقل مغطى', 'سيارات فاخرة', 'تأمين شامل']
        : ['Enclosed Carrier', 'Luxury Cars', 'Full Insurance'],
    },
    {
      id: 'emergency',
      icon: 'clock',
      title: getTranslation(t, 'services.emergency.title'),
      description: getTranslation(t, 'services.emergency.description'),
      features: language === 'ar'
        ? ['متاح 24/7', 'استجابة سريعة', 'خدمة شاملة']
        : ['Available 24/7', 'Fast Response', 'Comprehensive Service'],
    },
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
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {getTranslation(t, 'services.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getTranslation(t, 'services.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon] || Truck;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#e63946] to-[#d32f2f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e63946] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#e63946] rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <button
                      onClick={handleCall}
                      className="flex-1 bg-[#e63946] text-white py-3 rounded-lg font-semibold hover:bg-[#d32f2f] transition flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      {getTranslation(t, 'cta.call')}
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="flex-1 bg-[#25D366] text-white py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#e63946] to-[#d32f2f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'ar' ? 'تحتاج خدمة مخصصة؟' : 'Need a Custom Service?'}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'تواصل معنا وسنوفر لك الحل الأمثل لاحتياجاتك'
              : 'Contact us and we will provide the best solution for your needs'}
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

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServicesPage;