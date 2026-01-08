const Certificates = () => {
    const certs = [
        {
            title: "BACOD BOOTCAMP",
            company: "BANDUNG CODERS",
            date: "2025",
            fileUrl: "/BACOD-CERTIFICATE.jpg",
            isPdf: false,
            id: "BC-25"
        },
        {
            title: "PANITIA PKKMB UNIV",
            company: "INTERNATIONAL WOMEN UNIVERSITY",
            date: "2024",
            fileUrl: "/Sertifikat Panitia PKKMB 2024.jpg",
            isPdf: false,
            id: "PKKMB-24"
        },
        {
            title: "WEBINAR NASIONAL IPB",
            company: "BRAIN IPB UNIVERSITY",
            date: "2025",
            fileUrl: "/Sertifikat Webinar Nasional.jpg",
            isPdf: false,
            id: "IPB-25"
        },
        {
            title: "BI2C COLECTIVE",
            company: "CONNECTING BANDUNG",
            date: "2025",
            fileUrl: "/Sertif-bi2c.jpg",
            isPdf: false,
            id: "BI2C-25"
        },
        {
            title: "KADERISASI MAHASISWA",
            company: "BEM IWU",
            date: "2024",
            fileUrl: "/1.jpg",
            isPdf: false,
            id: "SKM-24"
        },
        {
            title: "WEBINAR TEKNOLOGI 5.O",
            company: "ITR HUB IWU",
            date: "2025",
            fileUrl: "/SERTIFIKAT-ITR.png",
            isPdf: false,
            id: "ITR-25"
        },
    ];

    return (
        <section id="certificates" className="relative py-24 px-4 bg-transparent overflow-hidden">
            {/* Background Glow Ornament */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="mb-16">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase bg-blue-500/10 rounded-lg border border-blue-500/20">
                        Professional Validation
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                        Certifications <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Achievements.</span>
                    </h2>
                </div>

                {/* Grid Sertifikat - Responsive Adjustments */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] transition-all duration-500 hover:border-blue-500/50 hover:bg-white/10 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Blue Line Accent on Hover */}
                            <div className="absolute top-0 right-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 group-hover:w-full transition-all duration-700"></div>

                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-500 border border-white/10 shadow-inner">
                                        {cert.isPdf ? "📄" : "📜"}
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-500 font-bold tracking-widest uppercase">
                                        {cert.id}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] leading-none">
                                        {cert.company}
                                    </p>
                                    <h3 className="text-xl font-black text-white leading-[1.2] group-hover:text-blue-400 transition-colors tracking-tighter">
                                        {cert.title}
                                    </h3>
                                    <div className="inline-block px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 border border-white/5 uppercase tracking-tighter mt-2">
                                        Issued {cert.date}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex items-center justify-between">
                                <a
                                    href={cert.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center gap-2 font-black text-[10px] text-white tracking-widest group-hover:gap-4 transition-all uppercase"
                                >
                                    OPEN CREDENTIAL
                                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                                <div className="flex gap-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-pulse"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Quote in Certificates */}
                <div className="mt-24 py-10 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm font-medium italic tracking-wide max-w-2xl mx-auto leading-relaxed">
                        "Organizing and learning to build a better future in the 5.0 Era."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Certificates;