import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

function App() {
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      {/* Show extra sections only on Home page */}
      {isHome && (
        <>
          <AboutUs />
          <Services />
          <ContactUs />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;
