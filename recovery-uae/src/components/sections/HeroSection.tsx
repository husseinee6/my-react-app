import React from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import { Phone, MessageCircle, ArrowRight, Shield, Clock, MapPin, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, language } = useLanguage();

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/971507245242';
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/10 to-transparent animate-pulse"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#e63946]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#e63946]/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e63946]/20 border border-[#e63946]/30 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-[#e63946]" />
            <span className="text-[#e63946] font-medium text-sm">
              {getTranslation(t, 'hero.available')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {getTranslation(t, 'hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {getTranslation(t, 'hero.subtitle')}
          </p>

          {/* Price Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-10">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-white font-bold text-lg">
              {getTranslation(t, 'hero.startingPrice')}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={handleCall}
              className="w-full sm:w-auto bg-[#e63946] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d32f2f] transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-[#e63946]/30"
            >
              <Phone className="w-6 h-6" />
              {getTranslation(t, 'hero.ctaCall')}
            </button>
            <button
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#128C7E] transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/30"
            >
              <MessageCircle className="w-6 h-6" />
              {getTranslation(t, 'hero.ctaWhatsApp')}
            </button>
            <button
              onClick={scrollToServices}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              {getTranslation(t, 'hero.ctaQuote')}
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-white/80">
              <MapPin className="w-5 h-5 text-[#e63946]" />
              <span className="text-sm">{language === 'ar' ? 'جميع الإمارات' : 'All UAE'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5 text-[#e63946]" />
              <span className="text-sm">{language === 'ar' ? 'مؤمن 100%' : '100% Insured'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="w-5 h-5 text-[#e63946]" />
              <span className="text-sm">{language === 'ar' ? 'أقل من 30 دقيقة' : '< 30 min'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-2 h-3 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;