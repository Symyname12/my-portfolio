const Experience = () => {
    const orgs = [
        {
            role: "Chairman (Ketua Himpunan)",
            organization: "HIMA IF IWU",
            period: "2025 - 2026",
            desc: "Memimpin arah strategis organisasi, menginisiasi transformasi digital, dan menjembatani aspirasi mahasiswa.",
            icon: "👑",
            skills: ["Leadership", "Strategic", "Management"]
        },
        {
            role: "HRM Member",
            organization: "Connecting Bandung",
            period: "2025 - Present",
            desc: "Mengelola SDM organisasi secara profesional guna meningkatkan loyalitas serta kapasitas anggota.",
            icon: "🤝🏻",
            skills: ["Communication", "Public Speaking", "Networking"]
        },
        {
            role: "Ketua Pelaksana",
            organization: "BI2C",
            period: "2025",
            desc: "Mengkoordinasi seluruh Divisi dan memastikan Acara Berjalan dengan lancar.",
            icon: "📢",
            skills: ["Organizing", "Networking", "Coordination"]
        },
        {
            role: "IT TEAM",
            organization: "KPUM IWU",
            period: "2025 - 2026",
            desc: "Mempersiapkan kebutuhan teknis Pemira seperti membuat rancangan sistem e-voting.",
            icon: "💻",
            skills: ["Ai Driven", "Development", "IT Support"]
        },
    ];

    return (
        <section id="organization" className="relative py-24 px-4 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.4em] text-blue-600 uppercase bg-blue-50 rounded-full">
                        Trajectory
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                        Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Journey.</span>
                    </h2>
                </div>

                {/* Horizontal Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {orgs.map((item, index) => (
                        <div key={index} className="group relative bg-gray-50 p-8 md:p-10 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden">

                            {/* Watermark Angka */}
                            <span className="absolute -top-4 -right-2 text-8xl font-black text-gray-200/20 italic group-hover:text-blue-100 transition-colors duration-500 pointer-events-none">
                                0{index + 1}
                            </span>

                            <div className="relative z-10">
                                {/* Top Info */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-full tracking-widest uppercase">
                                        {item.period}
                                    </span>
                                </div>

                                {/* Title & Org */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors leading-none tracking-tighter">
                                        {item.role}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-400 mt-2 uppercase tracking-widest">
                                        {item.organization}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium line-clamp-3">
                                    {item.desc}
                                </p>

                                {/* Tags/Skills */}
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                                    {item.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-[9px] font-black text-gray-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-all uppercase">
                                            #{skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quote Section */}
                <div className="mt-20 flex justify-center">
                    <div className="p-10 bg-gray-900 rounded-[3rem] text-center w-full max-w-3xl shadow-2xl shadow-blue-900/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 blur-[80px] opacity-20"></div>
                        <p className="text-blue-400 font-black text-xs uppercase tracking-[0.4em] mb-4">Core Philosophy</p>
                        <h4 className="text-white text-xl md:text-2xl font-bold leading-relaxed">
                            "A leader is one who knows the way, goes the way, and shows the way."
                        </h4>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;