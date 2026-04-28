import React from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import {
  Wrench, Map, Truck, Battery, CircleDot, AlertTriangle,
  Building2, Car, Clock4, Phone, MessageCircle, ArrowRight
} from 'lucide-react';

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

const ServicesSection: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      id: 'broken',
      icon: 'wrench',
      title: getTranslation(t, 'services.brokenDown.title'),
      description: getTranslation(t, 'services.brokenDown.description'),
    },
    {
      id: 'interEmirates',
      icon: 'map',
      title: getTranslation(t, 'services.interEmirates.title'),
      description: getTranslation(t, 'services.interEmirates.description'),
    },
    {
      id: 'flatbed',
      icon: 'truck',
      title: getTranslation(t, 'services.flatbed.title'),
      description: getTranslation(t, 'services.flatbed.description'),
    },
    {
      id: 'battery',
      icon: 'battery',
      title: getTranslation(t, 'services.battery.title'),
      description: getTranslation(t, 'services.battery.description'),
    },
    {
      id: 'tire',
      icon: 'circle',
      title: getTranslation(t, 'services.tire.title'),
      description: getTranslation(t, 'services.tire.description'),
    },
    {
      id: 'accident',
      icon: 'alert',
      title: getTranslation(t, 'services.accident.title'),
      description: getTranslation(t, 'services.accident.description'),
    },
    {
      id: 'dealership',
      icon: 'building',
      title: getTranslation(t, 'services.dealership.title'),
      description: getTranslation(t, 'services.dealership.description'),
    },
    {
      id: 'luxury',
      icon: 'car',
      title: getTranslation(t, 'services.luxury.title'),
      description: getTranslation(t, 'services.luxury.description'),
    },
    {
      id: 'emergency',
      icon: 'clock',
      title: getTranslation(t, 'services.emergency.title'),
      description: getTranslation(t, 'services.emergency.description'),
    },
  ];

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/971507245242';
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#e63946]/10 text-[#e63946] font-semibold px-4 py-2 rounded-full mb-4">
            {language === 'ar' ? 'خدماتنا' : 'OUR SERVICES'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(t, 'services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTranslation(t, 'services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Truck;
            return (
              <div
                key={service.id}
                id={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#e63946]/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#e63946] to-[#d32f2f] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e63946] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCall}
                    className="text-[#e63946] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    {getTranslation(t, 'cta.call')}
                    <Phone className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    className="text-[#25D366] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            {language === 'ar'
              ? 'تحتاج خدمة غير مذكورة؟ تواصل معنا مباشرة'
              : 'Need a service not listed? Contact us directly'}
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
  );
};

export default ServicesSection;