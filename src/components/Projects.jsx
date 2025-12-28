const Projects = () => {
    const projectData = [
        {
            title: "HUBPRO",
            description: "Bangun halaman profil yang elegan hanya dalam hitungan menit. Bagikan portofolio, media sosial, dan kontak Anda dengan satu tautan profesional.",
            image: "/HUBPRO.png",
            repoUrl: "https://github.com/username/project-repo",
            demoUrl: "https://dist-rho-beryl.vercel.app",
            tags: ["React", "Tailwind", "VITE"],
            number: "01"
        },
        {
            title: "Portfolio Website",
            description: "Website portfolio pribadi responsif dengan optimasi SEO dan animasi interaktif tingkat tinggi.",
            image: "/project2.jpg",
            repoUrl: "https://github.com/username/my-portfolio",
            demoUrl: "https://my-portfolio.com",
            tags: ["Vite", "React", "Framer"],
            number: "02"
        }
    ];

    return (
        <section id="projects" className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Dekorasi Latar Belakang */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none uppercase font-black text-[10vw] leading-none select-none">
                Projects Projects Projects
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                    <div className="text-left">
                        <h4 className="text-blue-600 font-black tracking-[0.3em] uppercase text-xs mb-3 text-center md:text-left">Portfolio</h4>
                        <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Works.</span>
                        </h2>
                    </div>
                </div>

                {/* Grid Projects */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projectData.map((project, index) => (
                        <div key={index} className="group relative flex flex-col bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl">

                            {/* Image Container with Hover Effect */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay Glassmorphism on Hover */}
                                <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Project Number Badge */}
                                <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center font-black text-gray-900 shadow-xl">
                                    {project.number}
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="p-10 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-[10px] font-black uppercase tracking-widest bg-white text-blue-600 border border-blue-100 px-3 py-1.5 rounded-full shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl font-black mb-4 text-gray-900 group-hover:text-blue-600 transition-colors tracking-tighter">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed mb-8 font-medium">
                                    {project.description}
                                </p>

                                <div className="mt-auto flex items-center gap-6 pt-6 border-t border-gray-100">
                                    <a
                                        href={project.repoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-black text-gray-900 flex items-center gap-2 hover:text-blue-600 transition-colors group/link"
                                    >
                                        GITHUB
                                        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">↗</span>
                                    </a>
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-sm font-black text-gray-900 flex items-center gap-2 hover:text-blue-600 transition-colors group/link"
                                    >
                                        LIVE PREVIEW
                                        <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">↗</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="mt-20 text-center">
                    <p className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-4">Interested in my process?</p>
                    <a href="#contact" className="inline-block text-gray-900 font-black text-xl border-b-4 border-blue-600 pb-1 hover:text-blue-600 transition-all">
                        Let's collaborate on your next idea
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;