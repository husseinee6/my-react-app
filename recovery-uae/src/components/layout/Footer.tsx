import React from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import { Phone, Mail, MapPin, Clock, MessageCircle, Truck, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, language, toggleLanguage } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/971507245242';
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-[#e63946] rounded-lg flex items-center justify-center">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <span className="font-bold text-2xl">
                {getTranslation(t, 'siteName')}
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {getTranslation(t, 'footer.description')}
            </p>
            <div className="space-y-3">
              <button
                onClick={handleCall}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <Phone className="w-5 h-5 text-[#e63946]" />
                +971 50 724 5242
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                +971 50 724 5242
              </button>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#e63946]" />
                info@recoveryuae.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">{getTranslation(t, 'footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <a href={language === 'ar' ? '/ar' : '/en'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'nav.home')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/about' : '/en/about'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'nav.about')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/services' : '/en/services'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'nav.services')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/areas' : '/en/areas'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'nav.areas')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/faq' : '/en/faq'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'nav.faq')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/contact' : '/en/contact'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">{getTranslation(t, 'footer.ourServices')}</h3>
            <ul className="space-y-3">
              <li>
                <a href={language === 'ar' ? '/ar/services#broken' : '/en/services#broken'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'services.brokenDown.title')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/services#flatbed' : '/en/services#flatbed'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'services.flatbed.title')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/services#inter' : '/en/services#inter'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {getTranslation(t, 'services.interEmirates.title')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/saudi' : '/en/saudi'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {language === 'ar' ? 'شحن إلى السعودية' : 'UAE to Saudi'}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/qatar' : '/en/qatar'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                  {language === 'ar' ? 'شحن إلى قطر' : 'UAE to Qatar'}
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-6">{getTranslation(t, 'footer.serviceAreas')}</h3>
            <ul className="space-y-3">
              <li>
                <a href={language === 'ar' ? '/ar/areas/abu-dhabi' : '/en/areas/abu-dhabi'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e63946]" />
                  {getTranslation(t, 'areas.abuDhabi.name')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/areas/dubai' : '/en/areas/dubai'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e63946]" />
                  {getTranslation(t, 'areas.dubai.name')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/areas/sharjah' : '/en/areas/sharjah'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e63946]" />
                  {getTranslation(t, 'areas.sharjah.name')}
                </a>
              </li>
              <li>
                <a href={language === 'ar' ? '/ar/areas/rak' : '/en/areas/rak'} className="text-gray-400 hover:text-white transition flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e63946]" />
                  {getTranslation(t, 'areas.rak.name')}
                </a>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#e63946]" />
                <span className="font-semibold">24/7</span>
              </div>
              <p className="text-gray-400 text-sm">
                {language === 'ar' ? 'متوفرون على مدار الساعة' : 'Always Available'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 {getTranslation(t, 'siteName')}. {getTranslation(t, 'copyright')}
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={toggleLanguage}
                className="text-gray-400 hover:text-white transition text-sm"
              >
                {getTranslation(t, 'nav.language')}
              </button>
              <a href="#top" className="text-gray-400 hover:text-white transition text-sm">
                {language === 'ar' ? 'العودة للأعلى' : 'Back to Top'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;