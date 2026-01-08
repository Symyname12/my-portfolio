import { useEffect, useState } from 'react';

const Hero = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // Logika untuk menangkap posisi kursor
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden bg-[#020617]">

            {/* EFEK AURORA MENGIKUTI KURSOR */}
            <div
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500 opacity-60"
                style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37, 99, 235, 0.15), transparent 80%)`
                }}
            />

            {/* Background Glow Statis (Agar tidak terlalu gelap di pojok) */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>

            <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">

                {/* Badge Responsif */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-md animate-pulse">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-[10px] md:text-xs font-black text-blue-400 uppercase tracking-[0.2em]">
                        Chairman of HIMA IF IWU 25/26
                    </span>
                </div>

                {/* Judul Utama Responsif */}
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
                    Hi, I'm <br className="md:hidden" />
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        Saeful Aziz.M
                    </span>
                </h1>

                {/* Deskripsi Responsif */}
                <p className="text-sm md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-medium px-4">
                    Specializing in <span className="text-white font-bold">AI-Driven Development</span>.
                    Merging leadership with advanced technology to build the next generation of digital solutions.
                </p>

                {/* Tombol Responsif */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
                    <a href="#contact"
                        className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 text-center">
                        Contact Me
                    </a>

                    <a href="#certificates"
                        className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/20 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300 text-center backdrop-blur-sm">
                        Achievements
                    </a>
                </div>

                {/* Statistik Dark Version */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 border-t border-white/10 pt-10 w-full max-w-3xl">
                    <div className="group">
                        <p className="text-2xl md:text-4xl font-black text-white group-hover:text-blue-400 transition-colors italic">AI</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Specialized</p>
                    </div>
                    <div className="hidden md:block group">
                        <p className="text-2xl md:text-4xl font-black text-white group-hover:text-blue-400 transition-colors italic">25/26</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Service Term</p>
                    </div>
                    <div className="group">
                        <p className="text-2xl md:text-4xl font-black text-white group-hover:text-blue-400 transition-colors italic">10+</p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Deployments</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;