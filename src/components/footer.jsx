const Contact = () => {
    const socialMedia = [
        {
            name: "Instagram",
            url: "https://www.instagram.com/sazsm_12?igsh=MWhqdWZhZnZvdjZzNQ==", // Ganti dengan link Anda
            icon: "📸",
            color: "bg-pink-100 text-pink-600"
        },
        {
            name: "LinkedIn",
            url: "www.linkedin.com/in/saepul-azsm-b012sam", // Ganti dengan link Anda
            icon: "💼",
            color: "bg-blue-100 text-blue-600"
        },
        {
            name: "GitHub",
            url: "https://github.com/Symyname12", // Ganti dengan link Anda
            icon: "💻",
            color: "bg-gray-100 text-gray-800"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/6281223729311", // Ganti dengan nomor WA Anda (awali dengan 62)
            icon: "💬",
            color: "bg-green-100 text-green-600"
        }
    ];

    return (
        <section id="contact" className="py-20 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Mari Terhubung!</h2>
                <p className="text-gray-600 mb-10">
                    Saya selalu terbuka untuk diskusi mengenai project baru atau peluang kolaborasi.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {socialMedia.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-6 rounded-2xl ${social.color} transition-transform hover:scale-105 flex flex-col items-center gap-2`}
                        >
                            <span className="text-3xl">{social.icon}</span>
                            <span className="font-semibold text-sm">{social.name}</span>
                        </a>
                    ))}
                </div>

                <div className="mt-16 text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Nama Anda. All rights reserved.
                </div>
            </div>
        </section>
    );
};

export default Contact;