import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience'; // Import komponen baru
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="bg-white text-gray-900 font-sans scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience /> {/* Diletakkan di sini agar alur profil kepemimpinan Anda jelas */}
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;