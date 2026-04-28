import React from 'react';
import { useLanguage, getTranslation } from '../i18n/translations';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FloatingButtons from '../components/layout/FloatingButtons';
import { BookOpen, ArrowRight, Clock, Calendar } from 'lucide-react';

const BlogPage: React.FC = () => {
  const { t, language } = useLanguage();

  const posts = [
    {
      id: 'when-recovery',
      title: getTranslation(t, 'blog.whenRecovery'),
      excerpt: getTranslation(t, 'blog.whenRecoveryExcerpt'),
      date: 'March 15, 2024',
      category: language === 'ar' ? 'نصائح' : 'Tips',
      readTime: '5 min',
    },
    {
      id: 'inter-emirates',
      title: getTranslation(t, 'blog.interEmirates'),
      excerpt: getTranslation(t, 'blog.interEmiratesExcerpt'),
      date: 'March 10, 2024',
      category: language === 'ar' ? 'دليل' : 'Guide',
      readTime: '7 min',
    },
    {
      id: 'breakdown',
      title: getTranslation(t, 'blog.breakdown'),
      excerpt: getTranslation(t, 'blog.breakdownExcerpt'),
      date: 'March 5, 2024',
      category: language === 'ar' ? 'سلامة' : 'Safety',
      readTime: '4 min',
    },
    {
      id: 'cost',
      title: getTranslation(t, 'blog.cost'),
      excerpt: getTranslation(t, 'blog.costExcerpt'),
      date: 'February 28, 2024',
      category: language === 'ar' ? 'أسعار' : 'Pricing',
      readTime: '6 min',
    },
    {
      id: 'flatbed-tow',
      title: getTranslation(t, 'blog.flatbedVsTow'),
      excerpt: getTranslation(t, 'blog.flatbedVsTowExcerpt'),
      date: 'February 20, 2024',
      category: language === 'ar' ? 'شرح' : 'Explainer',
      readTime: '5 min',
    },
    {
      id: 'choosing-service',
      title: getTranslation(t, 'blog.choosingService'),
      excerpt: getTranslation(t, 'blog.choosingServiceExcerpt'),
      date: 'February 15, 2024',
      category: language === 'ar' ? 'نصائح' : 'Tips',
      readTime: '6 min',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0a0a0a] via-gray-900 to-[#0a0a0a] py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-[#e63946]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-[#e63946]/20 border border-[#e63946]/30 rounded-full px-4 py-2 mb-6">
              <BookOpen className="w-5 h-5 text-[#e63946]" />
              <span className="text-[#e63946] font-medium">Blog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {getTranslation(t, 'blog.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {getTranslation(t, 'blog.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 group"
              >
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#e63946]/20 to-[#e63946]/5 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#e63946]/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-[#e63946]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#e63946]/10 text-[#e63946] text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#e63946] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <button className="text-[#e63946] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      {getTranslation(t, 'blog.readMore')}
                      <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogPage;