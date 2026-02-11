const Projects = () => {
    const projectData = [
        {
            title: "HUBPRO",
            description: "Bangun halaman profil yang elegan hanya dalam hitungan menit. Bagikan portofolio, media sosial, dan kontak Anda dengan satu tautan profesional.",
            image: "/HUBPRO.png",
            repoUrl: "https://github.com/Symyname12/hubpro",
            demoUrl: "https://dist-rho-beryl.vercel.app",
            tags: ["React", "Tailwind", "VITE"],
            number: "01"
        },
        {
            title: "Go services",
            description: "Solusi digital terintegrasi untuk operasional bengkel otomotif. Menampilkan sistem manajemen booking yang intuitif, kontrol inventaris otomatis dengan fitur critical-stock alert, dan dashboard admin yang komprehensif. Dibangun dengan fokus pada kecepatan performa dan desain visual yang agresif namun fungsional.",
            image: "/go-service.png",
            repoUrl: "https://github.com/Symyname12/go_services",
            demoUrl: "go-services1212.netlify.app",
            tags: ["Vite", "React", "Framer"],
            number: "02"
        }
    ];

    return (
        <section id="projects" className="relative py-24 px-4 bg-transparent overflow-hidden">
            {/* Watermark Background - Futuristic Style */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none uppercase font-black text-[15vw] leading-none select-none text-white whitespace-nowrap">
                PROJECTS PROJECTS PROJECTS
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 px-4">
                    <div className="text-left w-full md:w-auto">
                        <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase bg-blue-500/10 rounded-lg border border-blue-500/20">
                            Showcase
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">Works.</span>
                        </h2>
                    </div>
                </div>

                {/* Grid Projects - Responsive 1 Col (Mobile) & 2 Col (Desktop) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    {projectData.map((project, index) => (
                        <div key={index} className="group relative flex flex-col bg-white/5 backdrop-blur-xl rounded-[3rem] overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all duration-700 shadow-2xl">

                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 filter brightness-75 group-hover:brightness-100"
                                />

                                {/* Inner Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80"></div>

                                {/* Project Number Badge */}
                                <div className="absolute top-6 left-6 w-12 h-12 bg-blue-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] border border-white/20">
                                    {project.number}
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="p-8 md:p-12 flex flex-col flex-grow relative">
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-lg shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl md:text-4xl font-black mb-4 text-white group-hover:text-blue-400 transition-colors tracking-tighter leading-none">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-medium">
                                    {project.description}
                                </p>

                                {/* Action Buttons - Responsive Flex */}
                                <div className="mt-auto flex flex-col sm:flex-row items-center gap-4 pt-8 border-t border-white/5">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full sm:w-auto text-[10px] font-black text-white flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group/btn"
                                    >
                                        GITHUB
                                        <span className="text-lg group-hover/btn:translate-x-1 transition-transform">→</span>
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-full sm:w-auto text-[10px] font-black text-[#020617] flex items-center justify-center gap-3 py-3 px-6 rounded-xl bg-blue-400 hover:bg-blue-300 transition-all shadow-[0_0_20px_rgba(96,165,250,0.3)] group/btn"
                                    >
                                        LIVE PREVIEW
                                        <span className="text-lg group-hover/btn:translate-x-1 transition-transform">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-24 text-center px-4">
                    <p className="text-gray-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-6">Interested in my process?</p>
                    <a href="#contact" className="group relative inline-block text-white font-black text-xl md:text-3xl tracking-tighter transition-all">
                        <span className="relative z-10">Let's collaborate on your next idea</span>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;