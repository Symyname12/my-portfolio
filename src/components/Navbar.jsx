import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Efek deteksi scroll untuk mengubah style navbar secara dinamis
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <div className={`fixed w-full top-0 z-[100] transition-all duration-500 px-4 ${scrolled ? 'pt-2' : 'pt-6'}`}>
            <nav className={`max-w-6xl mx-auto transition-all duration-500 rounded-[2rem] border ${scrolled
                    ? 'bg-[#020617]/80 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]'
                    : 'bg-white/5 backdrop-blur-md border-white/10'
                }`}>
                <div className="px-6 lg:px-10">
                    <div className="flex justify-between h-16 md:h-20 items-center">

                        {/* Logo Futuristik */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg rotate-12 flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                S
                            </div>
                            <div className="text-xl font-black tracking-tighter text-white uppercase ml-1">
                                AZIS<span className="text-blue-500">.</span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-10">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[10px] font-black tracking-[0.2em] text-gray-400 hover:text-blue-400 uppercase transition-all relative group"
                                >
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            ))}

                            <a
                                href="#contact"
                                className="bg-blue-600 text-[#020617] px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all active:scale-95"
                            >
                                Hire Me
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-white"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen
                                        ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    }
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu with Animation */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-[#020617]/95 backdrop-blur-3xl border-t border-white/10 p-8 space-y-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm font-black text-gray-400 hover:text-blue-400 uppercase tracking-[0.3em]"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center bg-blue-600 text-[#020617] py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em]"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;