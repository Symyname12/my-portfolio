import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const myEmail = "azismubaroksaeful@gmail.com";
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("Halo, nama saya " + formData.name + ". %0D%0A%0D%0A" + formData.message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="relative py-24 px-4 bg-transparent overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10 opacity-50"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* SISI KIRI: Brand & Info */}
                    <div className="w-full lg:w-5/12 text-center lg:text-left">
                        <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase bg-blue-500/10 rounded-lg border border-blue-500/20">
                            Get In Touch
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                                Something Great.
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 gap-4 mt-12">
                            {/* Card Email */}
                            <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:border-blue-500/40 transition-all duration-500 flex items-center gap-5 shadow-2xl">
                                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Email Me</p>
                                    <p className="font-bold text-white break-all text-sm md:text-base">azismubaroksaeful@gmail.com</p>
                                </div>
                            </div>

                            {/* Card WhatsApp */}
                            <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:border-green-500/40 transition-all duration-500 flex items-center gap-5 shadow-2xl">
                                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">WhatsApp</p>
                                    <p className="font-bold text-white text-sm md:text-base">+62 812-2372-9311</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SISI KANAN: Contact Form */}
                    <div className="w-full lg:w-7/12 relative">
                        {/* Hiasan Aksen */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

                        <div className="relative bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl overflow-hidden">
                            {/* Form Header */}
                            <div className="mb-10">
                                <h3 className="text-2xl font-black text-white tracking-tighter italic">Send Message</h3>
                                <div className="w-12 h-1 bg-blue-500 mt-2 rounded-full"></div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-400 ml-2 uppercase tracking-[0.2em]">Your Name</label>
                                        <input
                                            type="text" name="name" required value={formData.name} onChange={handleChange}
                                            placeholder="Enter your name"
                                            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600 outline-none font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black text-gray-400 ml-2 uppercase tracking-[0.2em]">Subject</label>
                                        <input
                                            type="text" name="subject" required value={formData.subject} onChange={handleChange}
                                            placeholder="Topic of discussion"
                                            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600 outline-none font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 ml-2 uppercase tracking-[0.2em]">Message</label>
                                    <textarea
                                        name="message" required value={formData.message} onChange={handleChange}
                                        rows="4" placeholder="How can I help you?"
                                        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white placeholder:text-gray-600 outline-none font-medium resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-blue-600 text-[#020617] font-black rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:bg-blue-400 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group text-sm tracking-[0.2em]"
                                >
                                    TRANSMIT MESSAGE
                                    <span className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300 text-lg">🚀</span>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;