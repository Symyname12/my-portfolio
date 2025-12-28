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
            title: "BANDUNG INITIATIVE COLECTIVE FOR CHANCE",
            company: "CONNECTING BANDUNG COMMUNITY",
            date: "2025",
            fileUrl: "/Sertif-bi2c.jpg",
            isPdf: false,
            id: "BI2C-25"
        },
        {
            title: "SEKOLAH KADERISASI MAHASISWA",
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
        <section id="certificates" className="relative py-24 px-4 bg-white overflow-hidden">
            {/* Dekorasi Cahaya Latar */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="text-left">
                        <h4 className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-3">Professional Validation</h4>
                        <h2 className="text-5xl font-black text-gray-900 leading-tight">
                            Certifications <br /> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 text-6xl">Achievements.</span>
                        </h2>
                    </div>
                </div>

                {/* Grid Sertifikat */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-gray-100 p-8 rounded-[2.5rem] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Garis Aksen saat Hover */}
                            <div className="absolute top-0 left-0 w-1.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-500"></div>

                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-inner">
                                        {cert.isPdf ? "📄" : "📜"}
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-300 font-bold tracking-widest uppercase">
                                        {cert.id}
                                    </span>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-blue-600 text-xs font-black uppercase tracking-widest leading-none">
                                        {cert.company}
                                    </p>
                                    <h3 className="text-xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors">
                                        {cert.title}
                                    </h3>
                                    <div className="inline-block px-3 py-1 bg-gray-50 rounded-full text-[10px] font-bold text-gray-400 border border-gray-100 uppercase tracking-tighter">
                                        Issued {cert.date}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 flex items-center justify-between">
                                <a
                                    href={cert.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center gap-2 font-black text-xs tracking-tighter group-hover:gap-4 transition-all"
                                >
                                    OPEN CREDENTIAL
                                    <span className="text-blue-600 text-lg">→</span>
                                </a>
                                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 py-8 border-t border-dashed border-gray-200 text-center">
                    <p className="text-gray-400 text-sm font-medium italic">
                        "Organizing and learning to build a better future in the 5.0 Era."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Certificates;