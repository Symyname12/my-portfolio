import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <div className="fixed w-full top-0 z-50 px-4 pt-4">
            <nav className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md border border-gray-100 rounded-3xl shadow-sm">
                <div className="px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        {/* Logo */}
                        <div className="text-xl font-bold tracking-tighter text-gray-900 uppercase">
                            Saeful<span className="text-blue-600">.Aziz</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                            >
                                Hire Me
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white rounded-b-3xl border-t border-gray-50 p-6 space-y-4 shadow-xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-lg font-bold text-gray-800 hover:text-blue-600"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;