const Footer = () => {
    const socialMedia = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/sazsm_12?igsh=MWhqdWZhZnZvdjZzNQ==",
            icon: "📸",
            color: "hover:text-pink-400 border-pink-500/0 hover:border-pink-500/50 bg-pink-500/5"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/saepul-azsm-b012sam",
            icon: "💼",
            color: "hover:text-blue-400 border-blue-500/0 hover:border-blue-500/50 bg-blue-500/5"
        },
        {
            name: "GitHub",
            url: "https://github.com/Symyname12",
            icon: "💻",
            color: "hover:text-gray-300 border-white/0 hover:border-white/50 bg-white/5"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/6281223729311",
            icon: "💬",
            color: "hover:text-green-400 border-green-500/0 hover:border-green-500/50 bg-green-500/5"
        }
    ];

    return (
        <footer className="relative py-20 px-4 bg-transparent border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* Brand Logo/Name in Footer */}
                <div className="mb-8">
                    <h2 className="text-2xl font-black text-white tracking-tighter">
                        SAZSM<span className="text-blue-500">.</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-2 font-medium">
                        Let's connect and build the future together.
                    </p>
                </div>

                {/* Social Grid - Ultra Responsive */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                    {socialMedia.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-4 rounded-2xl border backdrop-blur-sm ${social.color} transition-all duration-300 flex items-center justify-center gap-3 group shadow-xl`}
                        >
                            <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                            <span className="font-black text-[10px] uppercase tracking-widest text-white/70 group-hover:text-inherit">
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="mt-20 flex flex-col items-center gap-4">
                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                    <div className="text-gray-500 text-[10px] font-black tracking-[0.3em] uppercase">
                        &copy; {new Date().getFullYear()} SAEPUL AZIZ. ALL RIGHTS RESERVED.
                    </div>
                    {/* Mini Tag */}
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] text-gray-600 font-bold tracking-widest uppercase">
                        Built with React & Tailwind
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        </footer>
    );
};

export default Footer;