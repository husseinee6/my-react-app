import React from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const { t, language } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/971507245242?text=' + encodeURIComponent(
      language === 'ar'
        ? 'مرحباً، أحتاج خدمة ريكفري/نقل سيارة'
        : 'Hello, I need car recovery/transport service'
    );
  };

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50 hidden md:flex flex-col gap-3">
        <button
          onClick={handleWhatsApp}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:scale-110 group relative"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {getTranslation(t, 'cta.whatsapp')}
          </span>
        </button>
        <button
          onClick={handleCall}
          className="bg-[#e63946] text-white p-4 rounded-full shadow-lg hover:bg-[#d32f2f] transition-all hover:scale-110 group relative"
          aria-label="Call"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            {getTranslation(t, 'cta.call')}
          </span>
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-lg">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={handleCall}
            className="flex-1 flex items-center justify-center gap-2 bg-[#e63946] text-white py-3 rounded-lg font-semibold hover:bg-[#d32f2f] transition"
          >
            <Phone className="w-5 h-5" />
            {getTranslation(t, 'cta.call')}
          </button>
          <button
            onClick={handleWhatsApp}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg font-semibold mx-3 hover:bg-[#128C7E] transition"
          >
            <MessageCircle className="w-5 h-5" />
            {getTranslation(t, 'cta.whatsapp')}
          </button>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact-form');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:border-[#e63946] hover:text-[#e63946] transition"
          >
            {language === 'ar' ? 'عرض سعر' : 'Quote'}
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingButtons;