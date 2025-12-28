const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4 overflow-hidden bg-white">
            {/* Efek Cahaya Dekoratif di Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-50"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-cyan-100 rounded-full blur-[100px] opacity-50"></div>
            </div>

            <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
                {/* Badge Jabatan Organisasi */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-8 animate-fade-in">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                    </span>
                    <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
                        Chairman of HIMA IF IWU 25/26
                    </span>
                </div>

                {/* Judul Utama dengan Gradasi */}
                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
                    Hi, I'm <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">Saeful Aziz.M</span>
                </h1>

                {/* Deskripsi AI-Driven */}
                <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed font-medium">
                    Specializing in <span className="text-gray-900 font-bold border-b-2 border-blue-400">AI-Driven Development</span>.
                    Leadership-focused professional dedicated to innovation and community growth.
                </p>

                {/* Tombol Aksi Modern */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                    <a href="#contact"
                        className="group relative px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300">
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative z-10">Let's Collaborate</span>
                    </a>

                    <a href="#certificates"
                        className="px-10 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-2xl font-bold hover:bg-gray-50 hover:border-blue-200 transition-all duration-300">
                        View Achievements
                    </a>
                </div>

                {/* Statistik Cepat (Opsional - Memberikan kesan pro) */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-gray-100 pt-10">
                    <div>
                        <p className="text-3xl font-black text-blue-600">AI</p>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Driven Dev</p>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-3xl font-black text-gray-900">25/26</p>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Hima IF Term</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-gray-900">10+</p>
                        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">Projects Done</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;