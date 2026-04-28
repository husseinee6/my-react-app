import React, { useState, useEffect } from 'react';
import { useLanguage, getTranslation } from '../../i18n/translations';
import {
  Phone, MessageCircle, Menu, X, MapPin, Clock,
  ChevronDown, Truck, Wrench, Zap, Battery, CircleDot,
  AlertTriangle, Building2, Car, Clock4, Globe
} from 'lucide-react';

interface HeaderProps {
  transparent?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const { t, language, toggleLanguage, direction } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
  };

  const handleWhatsApp = () => {
    window.location.href = 'https://wa.me/971507245242';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const bgClass = transparent
    ? isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    : 'bg-[#0a0a0a]';

  const textClass = transparent
    ? isScrolled ? 'text-gray-900' : 'text-white'
    : 'text-white';

  const mobileBgClass = transparent && !isScrolled ? 'bg-[#0a0a0a]' : 'bg-white';
  const mobileTextClass = 'text-gray-900';

  const services = [
    { id: 'broken', label: getTranslation(t, 'services.brokenDown.title'), path: language === 'ar' ? '/ar/services#broken' : '/en/services#broken' },
    { id: 'interEmirates', label: getTranslation(t, 'services.interEmirates.title'), path: language === 'ar' ? '/ar/services#inter' : '/en/services#inter' },
    { id: 'flatbed', label: getTranslation(t, 'services.flatbed.title'), path: language === 'ar' ? '/ar/services#flatbed' : '/en/services#flatbed' },
    { id: 'battery', label: getTranslation(t, 'services.battery.title'), path: language === 'ar' ? '/ar/services#battery' : '/en/services#battery' },
    { id: 'tire', label: getTranslation(t, 'services.tire.title'), path: language === 'ar' ? '/ar/services#tire' : '/en/services#tire' },
    { id: 'accident', label: getTranslation(t, 'services.accident.title'), path: language === 'ar' ? '/ar/services#accident' : '/en/services#accident' },
    { id: 'dealership', label: getTranslation(t, 'services.dealership.title'), path: language === 'ar' ? '/ar/services#dealership' : '/en/services#dealership' },
    { id: 'luxury', label: getTranslation(t, 'services.luxury.title'), path: language === 'ar' ? '/ar/services#luxury' : '/en/services#luxury' },
  ];

  const areas = [
    { id: 'abu-dhabi', label: getTranslation(t, 'areas.abuDhabi.name'), path: language === 'ar' ? '/ar/areas/abu-dhabi' : '/en/areas/abu-dhabi' },
    { id: 'dubai', label: getTranslation(t, 'areas.dubai.name'), path: language === 'ar' ? '/ar/areas/dubai' : '/en/areas/dubai' },
    { id: 'sharjah', label: getTranslation(t, 'areas.sharjah.name'), path: language === 'ar' ? '/ar/areas/sharjah' : '/en/areas/sharjah' },
    { id: 'ajman', label: getTranslation(t, 'areas.ajman.name'), path: language === 'ar' ? '/ar/areas/ajman' : '/en/areas/ajman' },
    { id: 'rak', label: getTranslation(t, 'areas.rak.name'), path: language === 'ar' ? '/ar/areas/rak' : '/en/areas/rak' },
    { id: 'fujairah', label: getTranslation(t, 'areas.fujairah.name'), path: language === 'ar' ? '/ar/areas/fujairah' : '/en/areas/fujairah' },
    { id: 'uaq', label: getTranslation(t, 'areas.uaq.name'), path: language === 'ar' ? '/ar/areas/uaq' : '/en/areas/uaq' },
    { id: 'al-ain', label: getTranslation(t, 'areas.alAin.name'), path: language === 'ar' ? '/ar/areas/al-ain' : '/en/areas/al-ain' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#e63946] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              24/7 {getTranslation(t, 'hero.available')}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {language === 'ar' ? 'جميع الإمارات' : 'All UAE Emirates'}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleCall} className="flex items-center gap-1 hover:opacity-80 transition">
              <Phone className="w-4 h-4" />
              +971 50 724 5242
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded hover:bg-white/30 transition"
            >
              <Globe className="w-4 h-4" />
              {getTranslation(t, 'nav.language')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`fixed top-0 md:top-8 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href={language === 'ar' ? '/ar' : '/en'} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#e63946] rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className={`font-bold text-xl ${textClass}`}>
                  {getTranslation(t, 'siteName')}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              <a href={language === 'ar' ? '/ar' : '/en'} className={`${textClass} hover:text-[#e63946] transition font-medium`}>
                {getTranslation(t, 'nav.home')}
              </a>
              <a href={language === 'ar' ? '/ar/about' : '/en/about'} className={`${textClass} hover:text-[#e63946] transition font-medium`}>
                {getTranslation(t, 'nav.about')}
              </a>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className={`${textClass} hover:text-[#e63946] transition font-medium flex items-center gap-1`}>
                  {getTranslation(t, 'nav.services')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {services.map((service) => (
                      <a
                        key={service.id}
                        href={service.path}
                        className="text-gray-700 hover:text-[#e63946] hover:bg-gray-50 px-3 py-2 rounded-lg transition text-sm"
                      >
                        {service.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Areas Dropdown */}
              <div className="relative group">
                <button className={`${textClass} hover:text-[#e63946] transition font-medium flex items-center gap-1`}>
                  {getTranslation(t, 'nav.areas')}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 grid grid-cols-1 gap-2">
                    {areas.map((area) => (
                      <a
                        key={area.id}
                        href={area.path}
                        className="text-gray-700 hover:text-[#e63946] hover:bg-gray-50 px-3 py-2 rounded-lg transition text-sm"
                      >
                        {area.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a href={language === 'ar' ? '/ar/saudi' : '/en/saudi'} className={`${textClass} hover:text-[#e63946] transition font-medium`}>
                {language === 'ar' ? 'السعودية' : 'Saudi'}
              </a>
              <a href={language === 'ar' ? '/ar/qatar' : '/en/qatar'} className={`${textClass} hover:text-[#e63946] transition font-medium`}>
                {language === 'ar' ? 'قطر' : 'Qatar'}
              </a>
              <a href={language === 'ar' ? '/ar/faq' : '/en/faq'} className={`${textClass} hover:text-[#e63946] transition font-medium`}>
                {getTranslation(t, 'nav.faq')}
              </a>
              <a href={language === 'ar' ? '/ar/blog' : '/en/blog'} className={`${textClass} hover:text-[#e63946] transition font-medium`}>
                {getTranslation(t, 'nav.blog')}
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={handleCall}
                className="bg-[#e63946] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d32f2f] transition flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {getTranslation(t, 'cta.call')}
              </button>
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                {getTranslation(t, 'cta.whatsapp')}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${textClass}`} />
              ) : (
                <Menu className={`w-6 h-6 ${textClass}`} />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className={`absolute left-0 top-0 bottom-0 w-80 ${mobileBgClass} overflow-y-auto ${direction === 'rtl' ? 'right-0' : 'left-0'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#e63946] rounded-lg flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-xl text-gray-900">
                    {getTranslation(t, 'siteName')}
                  </span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-900" />
                </button>
              </div>

              {/* Mobile Menu Links */}
              <div className="space-y-4">
                <a href={language === 'ar' ? '/ar' : '/en'} className="block text-lg font-medium text-gray-900 hover:text-[#e63946]">
                  {getTranslation(t, 'nav.home')}
                </a>
                <a href={language === 'ar' ? '/ar/about' : '/en/about'} className="block text-lg font-medium text-gray-900 hover:text-[#e63946]">
                  {getTranslation(t, 'nav.about')}
                </a>

                {/* Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 py-2"
                  >
                    {getTranslation(t, 'nav.services')}
                    <ChevronDown className={`w-5 h-5 transition ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {services.map((service) => (
                        <a
                          key={service.id}
                          href={service.path}
                          className="block text-sm text-gray-600 hover:text-[#e63946] py-1"
                        >
                          {service.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Areas Accordion */}
                <div>
                  <button
                    onClick={() => setIsAreasOpen(!isAreasOpen)}
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 py-2"
                  >
                    {getTranslation(t, 'nav.areas')}
                    <ChevronDown className={`w-5 h-5 transition ${isAreasOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isAreasOpen && (
                    <div className="pl-4 space-y-2 mt-2">
                      {areas.map((area) => (
                        <a
                          key={area.id}
                          href={area.path}
                          className="block text-sm text-gray-600 hover:text-[#e63946] py-1"
                        >
                          {area.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a href={language === 'ar' ? '/ar/saudi' : '/en/saudi'} className="block text-lg font-medium text-gray-900 hover:text-[#e63946]">
                  {language === 'ar' ? 'شحن إلى السعودية' : 'Shipping to Saudi'}
                </a>
                <a href={language === 'ar' ? '/ar/qatar' : '/en/qatar'} className="block text-lg font-medium text-gray-900 hover:text-[#e63946]">
                  {language === 'ar' ? 'شحن إلى قطر' : 'Shipping to Qatar'}
                </a>
                <a href={language === 'ar' ? '/ar/faq' : '/en/faq'} className="block text-lg font-medium text-gray-900 hover:text-[#e63946]">
                  {getTranslation(t, 'nav.faq')}
                </a>
                <a href={language === 'ar' ? '/ar/blog' : '/en/blog'} className="block text-lg font-medium text-gray-900 hover:text-[#e63946]">
                  {getTranslation(t, 'nav.blog')}
                </a>
                <a href={language === 'ar' ? '/ar/contact' : '/en/contact'} className="block text-lg font-medium text-gray-900 hover:text-[#e63946]">
                  {getTranslation(t, 'nav.contact')}
                </a>
              </div>

              {/* Mobile Language Toggle */}
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="mt-6 w-full bg-gray-100 text-gray-900 px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                <Globe className="w-5 h-5" />
                {getTranslation(t, 'nav.language')}
              </button>

              {/* Mobile CTA Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={handleCall}
                  className="w-full bg-[#e63946] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d32f2f] transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  {getTranslation(t, 'cta.call')}
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#128C7E] transition flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  {getTranslation(t, 'cta.whatsapp')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for non-transparent header */}
      {!transparent && <div className="h-32 md:h-40"></div>}
    </>
  );
};

export default Header;