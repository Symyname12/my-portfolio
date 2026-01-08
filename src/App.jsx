import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Efek aurora global yang mengikuti kursor di seluruh website
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    // Background diubah ke Navy/Black Deep (#020617)
    <div className="bg-[#020617] text-white font-sans scroll-smooth min-h-screen relative">

      {/* GLOBAL AURORA EFFECT */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 opacity-40 hidden md:block"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.08), transparent 80%)`
        }}
      />

      {/* Static Glows (Agar tampilan di HP yang tidak ada kursor tetap cantik) */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
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