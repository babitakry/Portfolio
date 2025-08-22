import './App.css'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import Projectsection from './components/Projectsection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/Theme';
import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, 
    });
  }, []);

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);

    // Refresh AOS on theme change
    AOS.refresh();
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <NavBar />
      <Introduction />
      <Aboutme />
      <Services />
      <Qualifications />
      <Projectsection />
      <ContactSection />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
