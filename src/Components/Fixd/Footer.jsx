import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import icon from "/Fi.png";

const Footer = () => {
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className="bg-black text-white pt-12 px-6 lg:px-20 relative z-10 shadow-inner border-t border-lime-600">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center justify-between">

                {/* Logo & Name */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <img src={icon} alt="Logo" className="w-24 drop-shadow-lime-400 h-24 object-contain drop-shadow-md " />

                    <h1 className="text-2xl font-semibold tracking-wider text-lime-300 transition duration-300">
                        Kamrul Islam Apurba
                    </h1>
                    <p className="text-sm font-medium text-lime-200 opacity-80">
                        Frontend Developer | React Developer | MS Word & Photoshop Expert
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    <h2 className="text-lg font-semibold text-lime-100">Connect with me</h2>
                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                            className="p-3 rounded-full bg-white/10 hover:bg-lime-500/30 transition-all hover:scale-110 shadow-lg"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/kamrul2006"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                            className="p-3 rounded-full bg-white/10 hover:bg-lime-500/30 transition-all hover:scale-110 shadow-lg"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="mailto:kamrulislamapurba@gmail.com"
                            title="Email"
                            className="p-3 rounded-full bg-white/10 hover:bg-lime-500/30 transition-all hover:scale-110 shadow-lg"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>


            <hr className="border-lime-700 my-4" />

            {/* Footer Bottom */}
            <div className="text-right flex justify-between items-center">
                <p className="text-center text-sm text-lime-300 opacity-80 pb-6">
                    &copy; {new Date().getFullYear()} Kamrul Islam Apurba. All rights reserved.
                </p>

                {/* Back to Top Button  */}

                <button
                    onClick={handleBackToTop}
                    title="Back to Top"
                    className="p-3 mb-2 rounded-full bg-lime-600 hover:bg-lime-500 text-white text-xl shadow-lg transition-all transform hover:scale-110 fixed z-30 bottom-4 right-4"
                >
                    <FaArrowUp />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
