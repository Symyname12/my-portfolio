const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React.js", level: "Advanced", color: "bg-blue-50 text-blue-600" },
                { name: "Tailwind CSS", level: "Expert", color: "bg-cyan-50 text-cyan-600" },
                { name: "Javascript", level: "Advanced", color: "bg-yellow-50 text-yellow-600" },
            ]
        },
        {
            category: "AI & Tools",
            skills: [
                { name: "AI Prompting", level: "Advanced", color: "bg-purple-50 text-purple-600" },
                { name: "GitHub", level: "Intermediate", color: "bg-gray-100 text-gray-800" },
                { name: "VS Code", level: "Expert", color: "bg-blue-100 text-blue-700" },
            ]
        },
        {
            category: "Leadership",
            skills: [
                { name: "Public Speaking", level: "Advanced", color: "bg-orange-50 text-orange-600" },
                { name: "Management", level: "Expert", color: "bg-green-50 text-green-600" },
                { name: "Teamwork", level: "Advanced", color: "bg-red-50 text-red-600" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h4 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">Expertise</h4>
                    <h2 className="text-4xl font-black text-gray-900">Technical & Leadership Skills</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, index) => (
                        <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-50 pb-4">
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className={`px-4 py-2 rounded-xl text-sm font-bold ${skill.color} border border-transparent hover:border-current transition-all cursor-default`}
                                    >
                                        {skill.name}
                                        <span className="block text-[10px] opacity-60 font-medium uppercase mt-0.5">
                                            {skill.level}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner Kecil untuk AI Driven */}
                <div className="mt-12 p-8 bg-linear-to-r from-blue-600 to-indigo-700 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-200">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">AI-Driven Methodology</h3>
                        <p className="opacity-80 max-w-xl text-sm">
                            Mengintegrasikan kecerdasan buatan dalam alur kerja pengembangan untuk meningkatkan efisiensi dan kualitas kode.
                        </p>
                    </div>
                    <div className="flex -space-x-4">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl">🤖</div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl">⚡</div>
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-xl">🧠</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;