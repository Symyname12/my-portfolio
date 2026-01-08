const Experience = () => {
    const orgs = [
        {
            role: "Chairman (Ketua Himpunan)",
            organization: "HIMA IF IWU",
            period: "2025 - 2026",
            desc: "Memimpin arah strategis organisasi, menginisiasi transformasi digital, dan menjembatani aspirasi mahasiswa dengan birokrasi universitas.",
            icon: "👑",
            skills: ["Leadership", "Strategic", "Management"]
        },
        {
            role: "HRM Member",
            organization: "Connecting Bandung",
            period: "2025 - Present",
            desc: "Mengelola SDM organisasi secara profesional guna meningkatkan loyalitas serta kapasitas anggota melalui program pengembangan terpadu.",
            icon: "🤝🏻",
            skills: ["Communication", "Public Speaking", "Networking"]
        },
        {
            role: "Ketua Pelaksana",
            organization: "BI2C",
            period: "2025",
            desc: "Mengoordinasi seluruh divisi teknis dan kreatif untuk memastikan jalannya acara besar sesuai dengan blueprint yang telah ditetapkan.",
            icon: "📢",
            skills: ["Organizing", "Networking", "Coordination"]
        },
        {
            role: "IT TEAM",
            organization: "KPUM IWU",
            period: "2025 - 2026",
            desc: "Membangun infrastruktur teknis untuk kebutuhan Pemira, termasuk sistem e-voting berbasis web yang aman dan transparan.",
            icon: "💻",
            skills: ["Ai Driven", "Development", "IT Support"]
        },
    ];

    return (
        <section id="organization" className="relative py-24 px-4 bg-transparent overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20 px-4">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase bg-blue-500/10 rounded-lg border border-blue-500/20">
                        Trajectory
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                        Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Journey.</span>
                    </h2>
                </div>

                {/* Grid Container - Fully Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-0">
                    {orgs.map((item, index) => (
                        <div key={index} className="group relative bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500 overflow-hidden">

                            {/* Watermark Angka - Futuristic Style */}
                            <span className="absolute -top-4 -right-2 text-8xl font-black text-white/5 italic group-hover:text-blue-500/10 transition-colors duration-500 pointer-events-none tracking-tighter">
                                0{index + 1}
                            </span>

                            <div className="relative z-10">
                                {/* Top Info */}
                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-blue-500/30 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-blue-400 bg-blue-400/10 px-4 py-2 rounded-xl tracking-[0.2em] uppercase border border-blue-400/20">
                                        {item.period}
                                    </span>
                                </div>

                                {/* Title & Org */}
                                <div className="mb-6">
                                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-blue-400 transition-colors leading-none tracking-tighter">
                                        {item.role}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-400 mt-3 uppercase tracking-widest flex items-center gap-2">
                                        <span className="w-4 h-[1px] bg-blue-500"></span>
                                        {item.organization}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 font-medium">
                                    {item.desc}
                                </p>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {item.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-gray-300 group-hover:border-blue-400/30 group-hover:text-blue-300 transition-all uppercase tracking-tighter">
                                            #{skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner Tech Detail */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500/0 group-hover:border-blue-500/50 transition-all duration-500 rounded-tl-[2.5rem]"></div>
                        </div>
                    ))}
                </div>

                {/* Quote Section - Glassmorphism */}
                <div className="mt-20 px-4 flex justify-center">
                    <div className="p-8 md:p-12 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-md rounded-[3rem] text-center w-full max-w-4xl border border-white/10 shadow-2xl relative overflow-hidden group">
                        {/* Glow effect inside quote */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>

                        <p className="text-blue-400 font-black text-xs uppercase tracking-[0.5em] mb-6">Core Philosophy</p>
                        <h4 className="text-white text-xl md:text-3xl font-black leading-tight tracking-tighter italic">
                            "A leader is one who knows the way, goes the way, and shows the way."
                        </h4>

                        {/* Decorative Line */}
                        <div className="w-12 h-1 bg-blue-600 mx-auto mt-8 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;