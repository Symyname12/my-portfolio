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
        const myEmail = "azismubaroksaeful@gmail.com"; // Ganti dengan email Anda
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("Halo, nama saya " + formData.name + ". %0D%0A%0D%0A" + formData.message)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="relative py-24 px-4 bg-white overflow-hidden">
            {/* Dekorasi Background - Efek Cahaya AI */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[120px] -z-10 opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-60"></div>

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* SISI KIRI: Brand & Info */}
                    <div className="w-full lg:w-5/12">
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-black tracking-[0.3em] text-blue-600 uppercase bg-blue-50 rounded-full">
                            Get In Touch
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-[1.1]">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                                Something Great.
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 gap-4 mt-12">
                            {/* Card Info 1 */}
                            <div className="group p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                    <span className="text-2xl">📧</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email Me</p>
                                    <p className="font-bold text-gray-900 break-all text-sm md:text-base">azismubaroksaeful@gmail.com</p>
                                </div>
                            </div>

                            {/* Card Info 2 */}
                            <div className="group p-6 bg-white border border-gray-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-200">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">WhatsApp</p>
                                    <p className="font-bold text-gray-900">+62 812-2372-9311</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SISI KANAN: Contact Form */}
                    <div className="w-full lg:w-7/12 relative">
                        {/* Hiasan Aksen di belakang Form */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl"></div>

                        <div className="relative bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-gray-100 shadow-2xl shadow-gray-200/50">
                            <form onSubmit={handleSubmit} className="space-y-7">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-gray-700 ml-2 uppercase tracking-tighter">Your Name</label>
                                        <input
                                            type="text" name="name" required value={formData.name} onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-black text-gray-700 ml-2 uppercase tracking-tighter">Subject</label>
                                        <input
                                            type="text" name="subject" required value={formData.subject} onChange={handleChange}
                                            placeholder="Collaboration"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-black text-gray-700 ml-2 uppercase tracking-tighter">Message</label>
                                    <textarea
                                        name="message" required value={formData.message} onChange={handleChange}
                                        rows="4" placeholder="Tell me about your idea..."
                                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-blue-500 transition-all font-medium resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl shadow-xl hover:bg-blue-600 hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 group text-lg"
                                >
                                    SEND MESSAGE
                                    <span className="group-hover:translate-x-2 transition-transform duration-300">🚀</span>
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