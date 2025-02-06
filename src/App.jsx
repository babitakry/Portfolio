import './App.css'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme';
import Services from './components/Services';
import Qualifications from './components/Qualifications';
import Projectsection from './components/Projectsection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileNavbar from './components/MobileNavbar';

function App() {

  return (
    <>
      <NavBar/>
      <Introduction/>
      <Aboutme/>
      <Services/>
      <Qualifications/>  
      <Projectsection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}

export default App
