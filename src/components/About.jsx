const About = () => {
    return (
        <section id="about" className="relative py-24 px-4 overflow-hidden bg-transparent">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

                {/* Bagian Visual Foto dengan Frame Futuristik */}
                <div className="w-full md:w-1/2 relative group">
                    {/* Glow Ornaments di belakang foto */}
                    <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[80px] opacity-50 group-hover:opacity-80 transition-opacity"></div>

                    <div className="relative">
                        {/* Frame Utama dengan Border Gradasi Neon */}
                        <div className="relative aspect-[4/5] p-[2px] rounded-[3rem] bg-gradient-to-br from-blue-500 via-transparent to-indigo-600 shadow-2xl overflow-hidden transform md:-rotate-3 group-hover:rotate-0 transition-transform duration-700">

                            {/* Inner Glass Container */}
                            <div className="w-full h-full bg-[#020617] rounded-[2.9rem] overflow-hidden relative">
                                <img
                                    src="/foto-profil.jpeg"
                                    alt="Saeful Aziz"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                                />

                                {/* Overlay Gradient di Foto */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>

                        {/* Floating Tech Badge (Tag Melayang) */}
                        <div className="absolute -bottom-6 -right-2 md:-right-6 bg-white/5 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                                <span className="text-xl">🚀</span>
                            </div>
                            <div>
                                <p className="text-xs font-black text-blue-400 uppercase tracking-widest leading-none">Hima IF IWU</p>
                                <p className="text-lg font-black text-white mt-1 leading-none tracking-tighter">CHAIRMAN</p>
                            </div>
                        </div>

                        {/* Dekorasi Garis Tech */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-blue-500/30 rounded-tr-3xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-indigo-500/30 rounded-bl-3xl"></div>
                    </div>
                </div>

                {/* Bagian Teks Deskripsi */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase bg-blue-500/10 rounded-lg border border-blue-500/20">
                        Profile Discovery
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                        Bridging Technology with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Leadership.</span>
                    </h2>

                    <div className="space-y-6">
                        <p className="text-lg text-gray-400 leading-relaxed font-medium">
                            Halo! Saya <span className="text-white font-bold italic">Saeful Aziz Mubarok</span>.
                            Sebagai pengembang yang berfokus pada <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-4">AI-Driven Development</span>, saya percaya bahwa teknologi adalah instrumen utama untuk memecahkan tantangan masa depan.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed font-medium">
                            Melalui peran strategis saya di Himpunan, saya mengintegrasikan manajemen tim dengan inovasi teknis untuk membangun ekosistem digital yang adaptif dan inklusif.
                        </p>
                    </div>

                    {/* Statistik Minimalis (Dark Version) */}
                    <div className="grid grid-cols-2 gap-8 border-t border-white/10 mt-12 pt-8">
                        <div className="group">
                            <h5 className="text-4xl font-black text-white group-hover:text-blue-500 transition-colors tracking-tighter">10+</h5>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Projects Handled</p>
                        </div>
                        <div className="group">
                            <h5 className="text-4xl font-black text-white group-hover:text-indigo-500 transition-colors tracking-tighter">01+</h5>
                            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Leadership Role</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;