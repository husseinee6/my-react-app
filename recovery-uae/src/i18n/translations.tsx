import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface Translations {
  [key: string]: string | Translations;
}

interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: Translations;
  toggleLanguage: () => void;
  getPath: (arPath: string, enPath: string) => string;
}

// Arabic translations
const ar: Translations = {
  // Meta & Common
  siteName: 'ريكفري الإمارات',
  tagline: 'خدمة ريكفري وسطحة على مدار الساعة',
  copyright: '© 2024 جميع الحقوق محفوظة',

  // Navigation
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'الخدمات',
    areas: 'المناطق',
    contact: 'تواصل معنا',
    faq: 'الأسئلة الشائعة',
    blog: 'المدونة',
    language: 'English',
  },

  // Hero
  hero: {
    title: 'خدمة ريكفري وسطحة في جميع الإمارات على مدار الساعة',
    subtitle: 'خدمة سريعة، أسعار واضحة، وصول سريع، ونقل آمن للسيارات',
    ctaCall: 'اتصل الآن',
    ctaWhatsApp: 'واتساب',
    ctaQuote: 'احصل على عرض سعر',
    startingPrice: 'الأسعار تبدأ من 50 درهم',
    available: 'متوفر 24/7',
  },

  // About
  about: {
    title: 'من نحن',
    subtitle: 'شريكك الموثوق لاستعادة ونقل السيارات في جميع الإمارات',
    description: 'مع سنوات من الخبرة في مجال استعادة السيارات، بنينا سمعة قوية لخدمة سريعة وموثوقة واحترافية. فريقنا من المحترفين المدربين متاح على مدار الساعة لمساعدتك في أي طوارئ للسيارات.',
    fastResponse: 'استجابة سريعة',
    fastResponseDesc: 'متوسط وقت الوصول أقل من 30 دقيقة',
    clearPricing: 'أسعار واضحة',
    clearPricingDesc: 'بدون رسوم خفية، أسعار واضحة مسبقًا',
    availability: 'توفر 24/7',
    availabilityDesc: 'خدمة مستمرة على مدار الساعة كل يوم',
    coverage: 'تغطية كاملة للإمارات',
    coverageDesc: 'جميع الإمارات السبع والمناطق المحيطة',
    professionalDrivers: 'سائقون محترفون',
    professionalDriversDesc: 'مدربون ومرخصون وذوو خبرة',
    safeTransport: 'نقل آمن',
    safeTransportDesc: 'سيارات مؤمنة ومراقبة',
  },

  // Trust Stats
  trust: {
    title: 'لماذا تختارنا',
    subtitle: 'موثوقون من آلاف العملاء في جميع الإمارات',
    vehiclesRecovered: 'سيارة تم استعادتها',
    serviceAvailable: 'خدمة متوفرة',
    avgResponse: 'متوسط وقت الاستجابة',
    satisfaction: 'رضا العملاء',
  },

  // Services
  services: {
    title: 'خدماتنا',
    subtitle: 'حلول شاملة لاستعادة ونقل السيارات في جميع الإمارات',
    brokenDown: {
      title: 'سحب السيارات المعطلة',
      description: 'خدمة سريعة لسحب السيارات التي لا تعمل أو تعاني من أعطال ميكانيكية.',
    },
    interEmirates: {
      title: 'نقل السيارات بين الإمارات',
      description: 'نقل آمن للسيارات بين جميع الإمارات مع تتبع GPS.',
    },
    flatbed: {
      title: 'سطحات لنقل السيارات',
      description: 'سطحات احترافية لنقل آمن لجميع أنواع السيارات.',
    },
    battery: {
      title: 'إنقاذ بطارية / اشتراك بطارية',
      description: 'خدمة طوارئ البطارية والاستبدال في جميع الإمارات.',
    },
    tire: {
      title: 'تبديل الإطارات',
      description: 'تبديل سريع للإطارات المسطحة على أي طريق في الإمارات.',
    },
    accident: {
      title: 'سحب سيارات الحوادث',
      description: 'استجابة طارئة للسيارات المتورطة في الحوادث.',
    },
    dealership: {
      title: 'نقل سيارات الوكالات والورش',
      description: 'نقل متخصص للوكالات ومعارض السيارات والورش.',
    },
    luxury: {
      title: 'نقل سيارات فاخرة أو رياضية',
      description: 'نقل بمركبات مغلقة للسيارات الفاخرة والرياضية.',
    },
    emergency: {
      title: 'خدمة طوارئ على مدار 24 ساعة',
      description: 'مساعدة طارئة على مدار الساعة في أي مكان بالإمارات.',
    },
  },

  // Areas
  areas: {
    title: 'المناطق التي نخدمها',
    subtitle: 'تغطية جميع إمارات الإمارات العربية المتحدة',
    abuDhabi: {
      name: 'أبوظبي',
      description: 'تغطية كاملة لاستعادة السيارات في أبوظبي والعين والمناطق المحيطة.',
    },
    dubai: {
      name: 'دبي',
      description: 'خدمة سطحات سريعة في جميع أحياء دبي.',
    },
    sharjah: {
      name: 'الشارقة',
      description: 'خدمة موثوقة لاستعادة ونقل السيارات في الشارقة وكلباء.',
    },
    ajman: {
      name: 'عجمان',
      description: 'خدمات سطحات ونقل احترافية في عجمان.',
    },
    rak: {
      name: 'رأس الخيمة',
      description: 'خدمات استعادة السيارات الطارئة في رأس الخيمة.',
    },
    fujairah: {
      name: 'الفجيرة',
      description: 'خدمات استعادة السيارات في المناطق الجبلية والساحلية.',
    },
    uaq: {
      name: 'أم القيوين',
      description: 'استجابة سريعة لاستعادة السيارات في أم القيوين.',
    },
    "al Ain": {
      name: 'العين',
      description: 'خدمات استعادة متخصصة للعين والمناطق الشرقية.',
    },
  },

  // Regional - Saudi Arabia
  saudi: {
    pageTitle: 'شحن السيارات من الإمارات إلى السعودية',
    pageSubtitle: 'نقل احترافي للسيارات من جميع إمارات الإمارات إلى السعودية',
    pageDescription: 'نقدم خدمات شاملة لشحن السيارات من الإمارات إلى السعودية، نغطي جميع المدن الرئيسية بما فيها الرياض وجدة والدمام وجميع الوجهات الأخرى. مركباتنا المغلقة تضمن وصول سيارتك بحالة ممتازة.',
    routesTitle: 'الطرق الأكثر طلبًا',
    route1: 'أبوظبي إلى الرياض',
    route2: 'دبي إلى جدة',
    route3: 'الشارقة إلى الدمام',
    route4: 'أبوظبي إلى مكة',
    route5: 'دبي إلى المدينة المنورة',
    ctaTitle: 'احصل على عرض سعر للشحن إلى السعودية',
    faqTitle: 'أسئلة شائعة عن الشحن إلى السعودية',
  },

  // Regional - Qatar
  qatar: {
    pageTitle: 'شحن السيارات من الإمارات إلى قطر',
    pageSubtitle: 'نقل آمن للسيارات من الإمارات إلى قطر',
    pageDescription: 'خدمات شحن سيارات احترافية من الإمارات إلى قطر. نتولى جميع التفاصيل بما فيها الوثائق وإتمام الإجراءات الجمركية والتسليم الآمن للدوحة والمدن القطرية الأخرى.',
    routesTitle: 'الطرق الأكثر طلبًا',
    route1: 'أبوظبي إلى الدوحة',
    route2: 'دبي إلى الدوحة',
    route3: 'الشارقة إلى الخور',
    route4: 'أبوظبي إلى الريان',
    ctaTitle: 'احصل على عرض سعر للشحن إلى قطر',
    faqTitle: 'أسئلة شائعة عن الشحن إلى قطر',
  },

  // FAQ
  faq: {
    title: 'الأسئلة الشائعة',
    subtitle: 'ابحث عن إجابات للأسئلة الشائعة حول خدماتنا',
    q1: 'كيف بسرعة يمكنكم الوصول إلي؟',
    a1: 'متوسط وقت استجابتنا أقل من 30 دقيقة في جميع الإمارات. في المدن الرئيسية مثل دبي وأبوظبي، نصل عادة خلال 15-20 دقيقة.',
    q2: 'ما هي المناطق التي تخدمونها؟',
    a2: 'نقدم خدمات في جميع الإمارات السبع: أبوظبي، دبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين. كما نخدم المناطق المحيطة.',
    q3: 'كم تكلفة خدمة الاستعادة؟',
    a3: 'تبدأ أسعارنا من 50 درهم لخدمات الاستعادة الأساسية داخل المدينة. يختلف النقل بين الإمارات والخدمات المتخصصة حسب المسافة ونوع السيارة. تواصل معنا لعرض سعر مجاني.',
    q4: 'هل يمكنكم نقل سيارتي إلى إمارة أخرى؟',
    a4: 'نعم، نقدم خدمات النقل بين الإمارات لجميع أنواع السيارات. سطحاتنا يمكنها نقل سيارتك بأمان إلى أي وجهة داخل الإمارات.',
    q5: 'هل تقدمون الشحن الدولي؟',
    a5: 'نعم، نقدم خدمات شحن السيارات من الإمارات إلى السعودية وقطر. نتولى جميع الوثائق وإجراءات الجمارك ونضمن التسليم الآمن.',
    q6: 'هل سيارتي مؤمنة أثناء النقل؟',
    a6: 'نعم، جميع السيارات المنقولة لدينا مؤمنة بالكامل أثناء الرحلة. كما نوفر تتبع GPS حتى تتمكن من مراقبة موقع سيارتك في الوقت الفعلي.',
  },

  // Contact
  contact: {
    title: 'تواصل معنا',
    subtitle: 'احصل على عرض سعر مجاني أو اطلب مساعدة طارئة',
    name: 'الاسم',
    phone: 'رقم الهاتف',
    email: 'البريد الإلكتروني',
    service: 'نوع الخدمة',
    location: 'موقعك',
    vehicleType: 'نوع السيارة',
    message: 'تفاصيل إضافية',
    submit: 'إرسال الطلب',
    callUs: 'اتصل بنا',
    whatsapp: 'واتساب',
    emailUs: 'البريد',
    workingHours: 'ساعات العمل',
  },

  // Blog
  blog: {
    title: 'مدونتنا',
    subtitle: 'مقالات ونصائح مفيدة حول استعادة ونقل السيارات',
    readMore: 'اقرأ المزيد',
    whenRecovery: 'متى تحتاج إلى ريكفري بدل السحب العادي؟',
    whenRecoveryExcerpt: 'فهم الفرق بين خدمات الاستعادة والسحب العادي يساعدك على الحصول على المساعدة المناسبة بشكل أسرع.',
    interEmirates: 'أفضل طريقة لنقل السيارة بين الإمارات',
    interEmiratesExcerpt: 'دليل شامل لنقل سيارتك بأمان بين إمارات الإمارات.',
    breakdown: 'ماذا تفعل إذا تعطلت سيارتك على الطريق؟',
    breakdownExcerpt: 'خطوات أساسية للبقاء آمنًا والحصول على المساعدة بسرعة عندما تتعطل سيارتك.',
    cost: 'تكلفة نقل السيارات في الإمارات',
    costExcerpt: 'فهم عوامل التسعير لخدمات نقل السيارات في جميع الإمارات.',
    flatbedVsTow: 'الفرق بين السطحة والونش',
    flatbedVsTowExcerpt: 'تعرف متى تطلب سطححة versus ونش تقليدي.',
    choosingService: 'كيف تختار خدمة سحب سيارات موثوقة؟',
    choosingServiceExcerpt: 'العوامل الرئيسية التي يجب مراعاتها عند اختيار شركة استعادة سيارات.',
  },

  // Footer
  footer: {
    description: 'خدمات استعادة ونقل السيارات الاحترافية في جميع الإمارات، متوفرة على مدار الساعة.',
    quickLinks: 'روابط سريعة',
    ourServices: 'خدماتنا',
    serviceAreas: 'المناطق المخدومة',
    contactInfo: 'معلومات التواصل',
  },

  // CTA
  cta: {
    call: 'اتصل الآن',
    whatsapp: 'واتساب',
    quote: 'احصل على عرض',
  },
};

// English translations
const en: Translations = {
  // Meta & Common
  siteName: 'Recovery UAE',
  tagline: '24/7 Car Recovery & Towing Service',
  copyright: '© 2024 All Rights Reserved',

  // Navigation
  nav: {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    areas: 'Areas',
    contact: 'Contact',
    faq: 'FAQ',
    blog: 'Blog',
    language: 'العربية',
  },

  // Hero
  hero: {
    title: '24/7 Car Recovery & Towing Across UAE',
    subtitle: 'Fast service, clear prices, quick response, and safe vehicle transport.',
    ctaCall: 'Call Now',
    ctaWhatsApp: 'WhatsApp',
    ctaQuote: 'Get Instant Quote',
    startingPrice: 'Starting from AED 50',
    available: 'Available 24/7',
  },

  // About
  about: {
    title: 'About Us',
    subtitle: 'Your trusted partner for car recovery and transport across the UAE',
    description: 'With years of experience in the car recovery industry, we have built a reputation for fast, reliable, and professional service. Our team of trained professionals is available 24/7 to assist you with any vehicle emergency.',
    fastResponse: 'Fast Response',
    fastResponseDesc: 'Average arrival time under 30 minutes',
    clearPricing: 'Clear Pricing',
    clearPricingDesc: 'No hidden fees, upfront quotes',
    availability: '24/7 Availability',
    availabilityDesc: 'Round-the-clock service every day',
    coverage: 'Full UAE Coverage',
    coverageDesc: 'All 7 Emirates and surrounding areas',
    professionalDrivers: 'Professional Drivers',
    professionalDriversDesc: 'Trained, licensed, and experienced',
    safeTransport: 'Safe Transport',
    safeTransportDesc: 'Vehicles secured and monitored',
  },

  // Trust Stats
  trust: {
    title: 'Why Choose Us',
    subtitle: 'Trusted by thousands of customers across UAE',
    vehiclesRecovered: 'Vehicles Recovered',
    serviceAvailable: 'Service Available',
    avgResponse: 'Average Response',
    satisfaction: 'Customer Satisfaction',
  },

  // Services
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive car recovery and transport solutions across the UAE',
    brokenDown: {
      title: 'Broken Down Vehicle Recovery',
      description: 'Fast recovery service for vehicles that won\'t start or have mechanical issues.',
    },
    interEmirates: {
      title: 'Inter-Emirates Transport',
      description: 'Safe transport of vehicles between all Emirates with GPS tracking.',
    },
    flatbed: {
      title: 'Flatbed Towing',
      description: 'Professional flatbed trucks for safe transportation of all vehicle types.',
    },
    battery: {
      title: 'Battery Jump Start',
      description: 'Emergency battery service and replacement throughout UAE.',
    },
    tire: {
      title: 'Tire Change Service',
      description: 'Quick tire replacement for flat tires on any road in UAE.',
    },
    accident: {
      title: 'Accident Vehicle Recovery',
      description: 'Emergency response for vehicles involved in accidents.',
    },
    dealership: {
      title: 'Dealership & Workshop Transport',
      description: 'Specialized transport for car dealerships and auto workshops.',
    },
    luxury: {
      title: 'Luxury & Sports Cars',
      description: 'Enclosed carrier transport for high-value and exotic vehicles.',
    },
    emergency: {
      title: '24/7 Emergency Service',
      description: 'Round-the-clock emergency assistance anywhere in UAE.',
    },
  },

  // Areas
  areas: {
    title: 'Areas We Serve',
    subtitle: 'Coverage across all Emirates of the UAE',
    abuDhabi: {
      name: 'Abu Dhabi',
      description: 'Complete car recovery coverage in Abu Dhabi, Al Ain, and surrounding areas.',
    },
    dubai: {
      name: 'Dubai',
      description: 'Fast response tow truck services across all Dubai neighborhoods.',
    },
    sharjah: {
      name: 'Sharjah',
      description: 'Reliable car recovery and transport in Sharjah and Kalba.',
    },
    ajman: {
      name: 'Ajman',
      description: 'Professional flatbed and towing services in Ajman.',
    },
    rak: {
      name: 'Ras Al Khaimah',
      description: 'Emergency car recovery services in Ras Al Khaimah.',
    },
    fujairah: {
      name: 'Fujairah',
      description: 'Mountain and coastal area vehicle recovery services.',
    },
    uaq: {
      name: 'Umm Al Quwain',
      description: 'Quick response car recovery across Umm Al Quwain.',
    },
    alAin: {
      name: 'Al Ain',
      description: 'Specialized recovery services for Al Ain and eastern regions.',
    },
  },

  // Regional - Saudi Arabia
  saudi: {
    pageTitle: 'Car Shipping from UAE to Saudi Arabia',
    pageSubtitle: 'Professional vehicle transport from all UAE Emirates to Saudi Arabia',
    pageDescription: 'We provide comprehensive car shipping services from UAE to Saudi Arabia, covering all major cities including Riyadh, Jeddah, Dammam, and all other destinations. Our enclosed carriers ensure your vehicle arrives in pristine condition.',
    routesTitle: 'Popular Routes',
    route1: 'Abu Dhabi to Riyadh',
    route2: 'Dubai to Jeddah',
    route3: 'Sharjah to Dammam',
    route4: 'Abu Dhabi to Mecca',
    route5: 'Dubai to Medina',
    ctaTitle: 'Get a Quote for Shipping to Saudi Arabia',
    faqTitle: 'FAQ about Shipping to Saudi Arabia',
  },

  // Regional - Qatar
  qatar: {
    pageTitle: 'Car Shipping from UAE to Qatar',
    pageSubtitle: 'Secure vehicle transport from UAE to Qatar',
    pageDescription: 'Professional car shipping services from UAE to Qatar. We handle all logistics including documentation, customs clearance, and safe delivery to Doha and other Qatari cities.',
    routesTitle: 'Popular Routes',
    route1: 'Abu Dhabi to Doha',
    route2: 'Dubai to Doha',
    route3: 'Sharjah to Al Khor',
    route4: 'Abu Dhabi to Al Rayyan',
    ctaTitle: 'Get a Quote for Shipping to Qatar',
    faqTitle: 'FAQ about Shipping to Qatar',
  },

  // FAQ
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Find answers to common questions about our services',
    q1: 'How fast can you reach me?',
    a1: 'Our average response time is under 30 minutes across all UAE Emirates. In major cities like Dubai and Abu Dhabi, we typically arrive within 15-20 minutes.',
    q2: 'What areas do you cover?',
    a2: 'We provide services across all 7 Emirates: Abu Dhabi, Dubai, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also serve surrounding areas.',
    q3: 'How much does recovery cost?',
    a3: 'Our starting prices begin at AED 50 for basic recovery services within the city. Inter-emirate transport and specialized services vary based on distance and vehicle type. Contact us for a free quote.',
    q4: 'Can you transport my car to another emirate?',
    a4: 'Yes, we provide inter-emirate transport services for all vehicle types. Our flatbed trucks can safely transport your car to any destination within the UAE.',
    q5: 'Do you offer international shipping?',
    a5: 'Yes, we provide car shipping services from UAE to Saudi Arabia and Qatar. We handle all documentation, customs clearance, and ensure safe delivery.',
    q6: 'Is my vehicle insured during transport?',
    a6: 'Yes, all vehicles transported by us are fully insured during the journey. We also provide GPS tracking so you can monitor your vehicle\'s location in real-time.',
  },

  // Contact
  contact: {
    title: 'Contact Us',
    subtitle: 'Get a free quote or request emergency assistance',
    name: 'Your Name',
    phone: 'Phone Number',
    email: 'Email Address',
    service: 'Service Type',
    location: 'Your Location',
    vehicleType: 'Vehicle Type',
    message: 'Additional Details',
    submit: 'Send Request',
    callUs: 'Call Us',
    whatsapp: 'WhatsApp',
    emailUs: 'Email',
    workingHours: 'Working Hours',
  },

  // Blog
  blog: {
    title: 'Our Blog',
    subtitle: 'Helpful articles and tips about car recovery and transport',
    readMore: 'Read More',
    whenRecovery: 'When to Use Recovery Instead of Regular Towing',
    whenRecoveryExcerpt: 'Understanding the difference between recovery services and regular towing can help you get the right help faster.',
    interEmirates: 'Best Way to Transport Car Between Emirates',
    interEmiratesExcerpt: 'A comprehensive guide to moving your vehicle safely between UAE Emirates.',
    breakdown: 'What to Do If Your Car Breaks Down on the Road',
    breakdownExcerpt: 'Essential steps to stay safe and get help quickly when your vehicle breaks down.',
    cost: 'Car Transport Costs in UAE Explained',
    costExcerpt: 'Understanding pricing factors for car transport services across the UAE.',
    flatbedVsTow: 'Flatbed vs Tow Truck: Which Do You Need?',
    flatbedVsTowExcerpt: 'Learn when to request a flatbed truck versus a traditional tow truck.',
    choosingService: 'How to Choose a Reliable Car Recovery Service',
    choosingServiceExcerpt: 'Key factors to consider when selecting a car recovery company.',
  },

  // Footer
  footer: {
    description: 'Professional car recovery and transport services across the UAE, available 24/7.',
    quickLinks: 'Quick Links',
    ourServices: 'Our Services',
    serviceAreas: 'Service Areas',
    contactInfo: 'Contact Info',
  },

  // CTA
  cta: {
    call: 'Call Now',
    whatsapp: 'WhatsApp',
    quote: 'Get Quote',
  },
};

const translations = { ar, en };

interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: Translations;
  toggleLanguage: () => void;
  getPath: (arPath: string, enPath: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = language;
      document.documentElement.dir = direction;
      document.body.classList.remove('rtl', 'ltr');
      document.body.classList.add(direction);
      localStorage.setItem('language', language);
    }
  }, [language, direction, mounted]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const getPath = useCallback((arPath: string, enPath: string): string => {
    return language === 'ar' ? arPath : enPath;
  }, [language]);

  const value: LanguageContextType = {
    language,
    direction,
    t: translations[language],
    toggleLanguage,
    getPath,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

// Helper function to get nested translation values
export const getTranslation = (t: Translations, path: string): string => {
  const keys = path.split('.');
  let result: Translations | string = t;
  for (const key of keys) {
    if (typeof result === 'object' && result !== null && key in result) {
      result = result[key] as Translations | string;
    } else {
      return path; // Return the path if translation not found
    }
  }
  return typeof result === 'string' ? result : path;
};

export default LanguageContext;