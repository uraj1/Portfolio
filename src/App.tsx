import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import DarkModeToggle from './components/DarkModeToggle';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <CustomCursor />
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <DarkModeToggle />
      <Footer/>
    </div>
  );
}

export default App;