const About = () => {
    return (
        <section id="about" className="py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Bagian Visual Foto */}
                <div className="w-full md:w-1/2 relative">
                    {/* Elemen Dekoratif di belakang foto */}
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

                    <div className="relative">
                        <div className="aspect-[4/5] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/foto-profil.jpeg"
                                alt="Saeful Aziz"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Tag Melayang di Foto */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                🚀
                            </div>
                            <div>
                                <p className="text-sm font-black text-gray-900 leading-none">Hima IF IWU</p>
                                <p className="text-xs text-gray-500 mt-1">Chairman 25/26</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian Teks Deskripsi */}
                <div className="w-full md:w-1/2">
                    <h4 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Discovery</h4>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                        Bridging Technology with <span className="text-blue-600">Leadership.</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Halo! Saya <span className="font-bold text-gray-900">Saeful Aziz Mubarok</span>.
                        Sebagai pengembang yang berfokus pada AI-driven development, saya percaya bahwa teknologi adalah alat untuk memecahkan masalah kompleks.
                        Melalui peran saya sebagai Ketua Hima, saya mengasah kemampuan manajerial dan teknis untuk menciptakan solusi digital yang berdampak luas.
                    </p>

                    {/* Statistik Minimalis */}
                    <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                        <div>
                            <h5 className="text-3xl font-black text-gray-900">10+</h5>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Project Handled</p>
                        </div>
                        <div>
                            <h5 className="text-3xl font-black text-gray-900">01+</h5>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">Leadership Role</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;