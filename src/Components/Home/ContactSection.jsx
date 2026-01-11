import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    FaFacebook,
    FaTwitter,
    FaWhatsapp,
    FaLinkedin,
    FaPaperPlane,
    FaUser,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";
import { BiMobile } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";

/* ================= EMAILJS INIT ================= */
emailjs.init("cFYNxFUfgcENpdend");

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        emailjs
            .send("service_37dr2kk", "template_pxu1vap", {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
            })
            .then(() => {
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((err) => {
                console.error("EmailJS Error:", err);
                setSuccess(false);
            })
            .finally(() => setLoading(false));
    };

    return (
        <section
            id="contact"
            className="relative bg-gradient-to-b from-black to-lime-950 py-10 px-6 lg:px-20 text-lime-300"
        >
            {/* ================= HEADER ================= */}
            <div className="text-center max-w-4xl mx-auto mb-5">


                <h2 className="lg:text-4xl text-3xl font-bold text-lime-200 mb-6 text-center"> My Contact Info. &{" "} <span className="lg:text-6xl text-5xl text-lime-500"> Let's Discuss </span> </h2> <p className="text-xl text-center pb-10 max-w-3xl mx-auto">
                    Have a project in mind or just want to say hello?
                    <br />
                    Send me a message — I’d love to hear from you.
                    <br />
                    Send direct email from here or knock into my social media platform. <br /> Feel free to contact me.
                </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* ================= CONTACT FORM ================= */}
                <form
                    onSubmit={handleSubmit}
                    className="relative backdrop-blur-2xl bg-black/40 border border-lime-500/40 rounded-2xl p-8 shadow-xl shadow-lime-500/20"
                >
                    <h3 className="text-3xl font-semibold text-lime-400 mb-8 text-center">
                        Send a Message
                    </h3>

                    {/* Name */}
                    <div className="relative mb-5">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-500" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/60 border border-lime-500/30 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/40 outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative mb-5">
                        <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-500" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-12 pr-4 py-4 rounded-xl bg-black/60 border border-lime-500/30 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/40 outline-none transition"
                        />
                    </div>

                    {/* Message */}
                    <div className="relative mb-6">
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-4 rounded-xl bg-black/60 border border-lime-500/30 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/40 outline-none transition resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-lime-500 text-black font-semibold py-4 rounded-xl hover:bg-lime-400 transition disabled:opacity-50"
                    >
                        <FaPaperPlane />
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {/* Feedback */}
                    {success === true && (
                        <p className="mt-4 text-center text-green-400">
                            ✅ Message sent successfully!
                        </p>
                    )}
                    {success === false && (
                        <p className="mt-4 text-center text-red-400">
                            ❌ Failed to send message. Try again.
                        </p>
                    )}
                </form>

                {/* ================= CONTACT INFO ================= */}
                <div className="space-y-6">
                    <h3 className="text-3xl font-semibold text-lime-400 mb-4">
                        Contact Information
                    </h3>

                    <InfoItem icon={<CiLocationOn />} text="Kishoreganj, Dhaka, Bangladesh" />
                    <InfoItem icon={<MdEmail />} text="kamrulislamapurba@gmail.com" />
                    <InfoItem icon={<BiMobile />} text="+880 1865-628444" />
                    <InfoItem icon={<FaWhatsapp />} text="+880 1616-210277" />

                    {/* Socials */}
                    <div className="pt-6">
                        <h4 className="text-xl text-lime-400 mb-4">Follow Me</h4>
                        <div className="flex gap-3 md:gap-5 text-4xl text-lime-500">
                            <SocialLink href="https://github.com/kamrul2006">
                                <FaGithub />
                            </SocialLink>
                            <SocialLink href="https://www.facebook.com/kamrul.islam.apurba">
                                <FaFacebook />
                            </SocialLink>
                            <SocialLink href="https://x.com/kamrul__2006">
                                <FaTwitter />
                            </SocialLink>
                            <SocialLink href="https://wa.me/+8801616210277">
                                <FaWhatsapp />
                            </SocialLink>
                            <SocialLink href="https://linkedin.com">
                                <FaLinkedin />
                            </SocialLink>
                            <SocialLink href="https://www.instagram.com/kamrul_islam_apurba">
                                <FaInstagram />
                            </SocialLink>
                            <SocialLink href="https://www.threads.com/@kamrul_islam_apurba">
                                <FaThreads />
                            </SocialLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ================= SMALL REUSABLE COMPONENTS ================= */

const InfoItem = ({ icon, text }) => (
    <div className="flex items-center gap-4 bg-black/40 border border-lime-500/30 rounded-xl p-4">
        <div className="text-lime-500 text-3xl">{icon}</div>
        <p className="text-lime-300 text-2xl">{text}</p>
    </div>
);

const SocialLink = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hover:text-lime-300 hover:scale-110 transition text-2xl md:text-4xl"
    >
        {children}
    </a>
);

export default ContactSection;
