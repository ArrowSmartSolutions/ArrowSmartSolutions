import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import PackageDetail from './pages/PackageDetail';
import SupportDetail from './pages/SupportDetail';
import NewsletterPage from './pages/NewsletterPage';

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white text-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/package/:packageId" element={<PackageDetail />} />
        <Route path="/support-plan/:planId" element={<SupportDetail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
