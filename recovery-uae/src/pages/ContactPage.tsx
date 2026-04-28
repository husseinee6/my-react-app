import React, { useState } from 'react';
import { useLanguage, getTranslation } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import { Phone, MessageCircle, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    vehicleType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', location: '', vehicleType: '', message: '' });
    }, 3000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      language === 'ar'
        ? `مرحباً، أنا ${formData.name} وأريد طلب خدمة.\nالخدمة: ${formData.service}\nالموقع: ${formData.location}`
        : `Hello, I am ${formData.name} and I want to request a service.\nService: ${formData.service}\nLocation: ${formData.location}`
    );
    window.open(`https://wa.me/971507245242?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+971507245242';
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
              {getTranslation(t, 'contact.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getTranslation(t, 'contact.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#e63946] to-[#d32f2f] rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">
                    {language === 'ar' ? 'اتصل بنا مباشرة' : 'Call Us Directly'}
                  </h3>
                  <div className="space-y-4">
                    <button
                      onClick={handleCall}
                      className="w-full bg-white/20 backdrop-blur-sm text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-white/30 transition"
                    >
                      <Phone className="w-6 h-6" />
                      +971 50 724 5242
                    </button>
                    <button
                      onClick={handleWhatsApp}
                      className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#128C7E] transition"
                    >
                      <MessageCircle className="w-6 h-6" />
                      {language === 'ar' ? 'رسالة واتساب' : 'WhatsApp Message'}
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#e63946]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{getTranslation(t, 'contact.callUs')}</p>
                        <p className="font-bold text-gray-900">+971 50 724 5242</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-5 h-5 text-[#25D366]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{getTranslation(t, 'contact.whatsapp')}</p>
                        <p className="font-bold text-gray-900">+971 50 724 5242</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#e63946]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{getTranslation(t, 'contact.emailUs')}</p>
                        <p className="font-bold text-gray-900">info@recoveryuae.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#e63946]/10 rounded-xl flex items-center justify-center">
                        <Clock className="w-5 h-5 text-[#e63946]" />
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">{getTranslation(t, 'contact.workingHours')}</p>
                        <p className="font-bold text-gray-900">24/7 {language === 'ar' ? 'على مدار الساعة' : 'Always Available'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {language === 'ar' ? 'تم إرسال طلبك بنجاح!' : 'Request Submitted Successfully!'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'ar' ? 'سنتواصل معك خلال دقائق' : 'We will contact you within minutes'}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {getTranslation(t, 'contact.name')}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {getTranslation(t, 'contact.phone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getTranslation(t, 'contact.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {getTranslation(t, 'contact.service')}
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                        >
                          <option value="">{language === 'ar' ? 'اختر الخدمة' : 'Select Service'}</option>
                          <option value="recovery">{getTranslation(t, 'services.brokenDown.title')}</option>
                          <option value="inter-emirates">{getTranslation(t, 'services.interEmirates.title')}</option>
                          <option value="flatbed">{getTranslation(t, 'services.flatbed.title')}</option>
                          <option value="saudi">{language === 'ar' ? 'شحن إلى السعودية' : 'UAE to Saudi'}</option>
                          <option value="qatar">{language === 'ar' ? 'شحن إلى قطر' : 'UAE to Qatar'}</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {getTranslation(t, 'contact.location')}
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getTranslation(t, 'contact.vehicleType')}
                      </label>
                      <select
                        name="vehicleType"
                        value={formData.vehicleType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition"
                      >
                        <option value="">{language === 'ar' ? 'اختر نوع السيارة' : 'Select Vehicle Type'}</option>
                        <option value="sedan">{language === 'ar' ? 'سيدان' : 'Sedan'}</option>
                        <option value="suv">{language === 'ar' ? 'دفع رباعي' : 'SUV'}</option>
                        <option value="luxury">{language === 'ar' ? 'فاخرة' : 'Luxury'}</option>
                        <option value="sports">{language === 'ar' ? 'رياضية' : 'Sports'}</option>
                        <option value="other">{language === 'ar' ? 'أخرى' : 'Other'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {getTranslation(t, 'contact.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#e63946] focus:border-transparent transition resize-none"
                      ></textarea>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        type="submit"
                        className="flex-1 bg-[#e63946] text-white py-4 rounded-xl font-bold hover:bg-[#d32f2f] transition flex items-center justify-center gap-3"
                      >
                        <Send className="w-5 h-5" />
                        {getTranslation(t, 'contact.submit')}
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="flex-1 bg-[#25D366] text-white py-4 rounded-xl font-bold hover:bg-[#128C7E] transition flex items-center justify-center gap-3"
                      >
                        <MessageCircle className="w-5 h-5" />
                        {language === 'ar' ? 'أرسل عبر واتساب' : 'Send via WhatsApp'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <div className="h-20 md:hidden"></div>
    </div>
  );
};

export default ContactPage;