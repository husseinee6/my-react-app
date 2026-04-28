import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './i18n/translations';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AreaPage from './pages/AreaPage';
import SaudiPage from './pages/SaudiPage';
import QatarPage from './pages/QatarPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {/* Arabic Routes */}
          <Route path="/ar" element={<HomePage />} />
          <Route path="/ar/about" element={<AboutPage />} />
          <Route path="/ar/services" element={<ServicesPage />} />
          <Route path="/ar/services/:id" element={<ServicesPage />} />
          <Route path="/ar/areas/abu-dhabi" element={<AreaPage areaId="abu-dhabi" />} />
          <Route path="/ar/areas/dubai" element={<AreaPage areaId="dubai" />} />
          <Route path="/ar/areas/sharjah" element={<AreaPage areaId="sharjah" />} />
          <Route path="/ar/areas/ajman" element={<AreaPage areaId="ajman" />} />
          <Route path="/ar/areas/rak" element={<AreaPage areaId="rak" />} />
          <Route path="/ar/areas/fujairah" element={<AreaPage areaId="fujairah" />} />
          <Route path="/ar/areas/uaq" element={<AreaPage areaId="uaq" />} />
          <Route path="/ar/areas/al-ain" element={<AreaPage areaId="al-ain" />} />
          <Route path="/ar/saudi" element={<SaudiPage />} />
          <Route path="/ar/qatar" element={<QatarPage />} />
          <Route path="/ar/faq" element={<FAQPage />} />
          <Route path="/ar/blog" element={<BlogPage />} />
          <Route path="/ar/contact" element={<ContactPage />} />

          {/* English Routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/services" element={<ServicesPage />} />
          <Route path="/en/services/:id" element={<ServicesPage />} />
          <Route path="/en/areas/abu-dhabi" element={<AreaPage areaId="abu-dhabi" />} />
          <Route path="/en/areas/dubai" element={<AreaPage areaId="dubai" />} />
          <Route path="/en/areas/sharjah" element={<AreaPage areaId="sharjah" />} />
          <Route path="/en/areas/ajman" element={<AreaPage areaId="ajman" />} />
          <Route path="/en/areas/rak" element={<AreaPage areaId="rak" />} />
          <Route path="/en/areas/fujairah" element={<AreaPage areaId="fujairah" />} />
          <Route path="/en/areas/uaq" element={<AreaPage areaId="uaq" />} />
          <Route path="/en/areas/al-ain" element={<AreaPage areaId="al-ain" />} />
          <Route path="/en/saudi" element={<SaudiPage />} />
          <Route path="/en/qatar" element={<QatarPage />} />
          <Route path="/en/faq" element={<FAQPage />} />
          <Route path="/en/blog" element={<BlogPage />} />
          <Route path="/en/contact" element={<ContactPage />} />

          {/* Redirect root to Arabic version */}
          <Route path="/" element={<Navigate to="/ar" replace />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;