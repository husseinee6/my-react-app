import React from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import { Shield, Clock, MapPin, Users, Truck, Award } from 'lucide-react';

const TrustStatsSection: React.FC = () => {
  const { t, language } = useLanguage();

  const stats = [
    {
      icon: Truck,
      value: '10,000+',
      label: getTranslation(t, 'trust.vehiclesRecovered'),
    },
    {
      icon: Clock,
      value: '24/7',
      label: getTranslation(t, 'trust.serviceAvailable'),
    },
    {
      icon: MapPin,
      value: '30 min',
      label: getTranslation(t, 'trust.avgResponse'),
    },
    {
      icon: Award,
      value: '100%',
      label: getTranslation(t, 'trust.satisfaction'),
    },
  ];

  const features = [
    {
      icon: Shield,
      title: getTranslation(t, 'about.safeTransport'),
      description: getTranslation(t, 'about.safeTransportDesc'),
    },
    {
      icon: Clock,
      title: getTranslation(t, 'about.fastResponse'),
      description: getTranslation(t, 'about.fastResponseDesc'),
    },
    {
      icon: MapPin,
      title: getTranslation(t, 'about.coverage'),
      description: getTranslation(t, 'about.coverageDesc'),
    },
    {
      icon: Users,
      title: getTranslation(t, 'about.professionalDrivers'),
      description: getTranslation(t, 'about.professionalDriversDesc'),
    },
  ];

  return (
    <section id="trust" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#e63946]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#e63946]" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {getTranslation(t, 'trust.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {getTranslation(t, 'trust.subtitle')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-[#e63946]/30 transition-all"
            >
              <div className="w-12 h-12 bg-[#e63946] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStatsSection;