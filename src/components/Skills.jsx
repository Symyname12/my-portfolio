const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React.js", level: "Advanced", color: "text-blue-400 border-blue-400/20 bg-blue-400/5" },
                { name: "Tailwind CSS", level: "Expert", color: "text-cyan-400 border-cyan-400/20 bg-cyan-400/5" },
                { name: "Javascript", level: "Advanced", color: "text-yellow-400 border-yellow-400/20 bg-yellow-400/5" },
            ]
        },
        {
            category: "AI & Tools",
            skills: [
                { name: "AI Prompting", level: "Advanced", color: "text-purple-400 border-purple-400/20 bg-purple-400/5" },
                { name: "GitHub", level: "Intermediate", color: "text-gray-300 border-gray-300/20 bg-gray-300/5" },
                { name: "VS Code", level: "Expert", color: "text-blue-500 border-blue-500/20 bg-blue-500/5" },
            ]
        },
        {
            category: "Leadership",
            skills: [
                { name: "Public Speaking", level: "Advanced", color: "text-orange-400 border-orange-400/20 bg-orange-400/5" },
                { name: "Management", level: "Expert", color: "text-green-400 border-green-400/20 bg-green-400/5" },
                { name: "Teamwork", level: "Advanced", color: "text-red-400 border-red-400/20 bg-red-400/5" },
            ]
        }
    ];

    return (
        <section id="skills" className="relative py-24 px-4 bg-transparent overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase bg-blue-500/10 rounded-lg border border-blue-500/20">
                        Expertise
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter">
                        Technical & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Leadership.</span>
                    </h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, index) => (
                        <div key={index} className="group bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                            <h3 className="text-xl font-black mb-8 text-white flex items-center gap-3">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                {cat.category}
                            </h3>

                            <div className="flex flex-wrap gap-4">
                                {cat.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className={`px-5 py-3 rounded-2xl text-xs font-black border ${skill.color} transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] cursor-default w-full sm:w-auto`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span>{skill.name}</span>
                                        </div>
                                        <span className="block text-[8px] opacity-50 uppercase tracking-[0.2em]">
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* AI Driven Banner - Dark Mode */}
                <div className="mt-20 relative group overflow-hidden rounded-[3rem] p-[1px] bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500">
                    <div className="relative bg-[#020617] rounded-[2.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        {/* Decorative Background for Banner */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter italic">AI-Driven Methodology</h3>
                            <p className="text-gray-400 max-w-xl text-lg leading-relaxed font-medium">
                                Mengintegrasikan kecerdasan buatan dalam alur kerja pengembangan untuk meningkatkan efisiensi dan kualitas kode.
                            </p>
                        </div>

                        <div className="relative z-10 flex -space-x-4">
                            {['🤖', '⚡', '🧠'].map((emoji, i) => (
                                <div key={i} className="w-16 h-16 rounded-[1.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-3xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
                                    {emoji}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;