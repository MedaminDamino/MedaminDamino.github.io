import './App.css';
import { ThemeProvider } from './common/ThemeContext';
import Hero from './sections1/Hero/Hero';
import Projects from './sections1/Projects/Projects';
import Contact from './sections1/contact/Contact';
import Skills from './sections1/skills/Skills';
import Footer from './sections1/Footer/Footer1';


function App() {
  return (
    <>
    <Hero/>
    <Projects/>
    <Skills/>
    <Contact/> 
    <Footer/>
    </>
  );
}

export default App;
