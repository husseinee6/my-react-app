import React from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import { MapPin, Phone, ArrowRight, Clock } from 'lucide-react';

const AreasSection: React.FC = () => {
  const { t, language } = useLanguage();

  const areas = [
    {
      id: 'abu-dhabi',
      name: getTranslation(t, 'areas.abuDhabi.name'),
      description: getTranslation(t, 'areas.abuDhabi.description'),
      path: language === 'ar' ? '/ar/areas/abu-dhabi' : '/en/areas/abu-dhabi',
    },
    {
      id: 'dubai',
      name: getTranslation(t, 'areas.dubai.name'),
      description: getTranslation(t, 'areas.dubai.description'),
      path: language === 'ar' ? '/ar/areas/dubai' : '/en/areas/dubai',
    },
    {
      id: 'sharjah',
      name: getTranslation(t, 'areas.sharjah.name'),
      description: getTranslation(t, 'areas.sharjah.description'),
      path: language === 'ar' ? '/ar/areas/sharjah' : '/en/areas/sharjah',
    },
    {
      id: 'ajman',
      name: getTranslation(t, 'areas.ajman.name'),
      description: getTranslation(t, 'areas.ajman.description'),
      path: language === 'ar' ? '/ar/areas/ajman' : '/en/areas/ajman',
    },
    {
      id: 'rak',
      name: getTranslation(t, 'areas.rak.name'),
      description: getTranslation(t, 'areas.rak.description'),
      path: language === 'ar' ? '/ar/areas/rak' : '/en/areas/rak',
    },
    {
      id: 'fujairah',
      name: getTranslation(t, 'areas.fujairah.name'),
      description: getTranslation(t, 'areas.fujairah.description'),
      path: language === 'ar' ? '/ar/areas/fujairah' : '/en/areas/fujairah',
    },
    {
      id: 'uaq',
      name: getTranslation(t, 'areas.uaq.name'),
      description: getTranslation(t, 'areas.uaq.description'),
      path: language === 'ar' ? '/ar/areas/uaq' : '/en/areas/uaq',
    },
    {
      id: 'al-ain',
      name: getTranslation(t, 'areas.alAin.name'),
      description: getTranslation(t, 'areas.alAin.description'),
      path: language === 'ar' ? '/ar/areas/al-ain' : '/en/areas/al-ain',
    },
  ];

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#e63946]/10 text-[#e63946] font-semibold px-4 py-2 rounded-full mb-4">
            {language === 'ar' ? 'تغطيتنا' : 'OUR COVERAGE'}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {getTranslation(t, 'areas.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {getTranslation(t, 'areas.subtitle')}
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <a
              key={area.id}
              href={area.path}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-[#e63946]/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center group-hover:bg-[#e63946] transition-colors">
                  <MapPin className="w-6 h-6 text-[#e63946] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e63946] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[#e63946] font-semibold text-sm">
                <span>{language === 'ar' ? 'اكتشف المزيد' : 'Discover'}</span>
                <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#e63946] to-[#d32f2f] rounded-3xl p-8 md:p-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-white">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                {language === 'ar' ? 'خدمة 24/7 في جميع المناطق' : '24/7 Service Across All Areas'}
              </h3>
              <p className="text-white/80">
                {language === 'ar'
                  ? 'نتوفر في جميع الإمارات السبعة على مدار الساعة'
                  : 'Available in all 7 Emirates round the clock'}
              </p>
            </div>
            <button
              onClick={handleCall}
              className="bg-white text-[#e63946] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              {getTranslation(t, 'cta.call')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;