import { useState } from 'react';
import pr1 from "/Projects/pro1.jpg";
import pr2 from "/Projects/pr2.jpg";
import pr4 from "/Projects/pr4.jpg";
import pr5 from "/Projects/pr5.jpg";
import prb from "/Projects/prb.png";
import pr6 from "/Projects/prX.png";
import pp from "/Projects/pp.png";
import px from "/Projects/px.png";
import ki from "/Projects/ki.png";
import ka from "/Projects/ka.png";
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const projects = [
    {
        name: 'K-Tech',
        nameDis: "(A Tech hunting web)",
        image: pr5,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'K-Tech UI is a dynamic web platform designed for seamless product management, interactive user engagement, and efficient content moderation.',
        liveLink: "https://k-tech-ltd.web.app/",
        githubLink: 'https://github.com/kamrul2006/K-Tech-UI',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },
    {
        name: 'Shadhin-Bangla 2.0',
        nameDis: "(বাংলার কণ্ঠস্বর — নতুন প্রজন্মের জন্য ডিজিটাল বাংলাদেশ।)",
        image: prb,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'Shadhin Bangla 2.0 is a digital platform that brings together memories of the martyrs of the July Quota Movement in Bangladesh, the history of the freedom struggle, blogs, photos, and tributes.It is not just a website — it is a digital document of the history and consciousness of Bengal for the new generation.',
        liveLink: "https://shadin-bangla-2-0.web.app",
        githubLink: 'https://github.com/kamrul2006/shadin-bangla-2.0',
        challenges: ['Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered recommendations', 'Adding support for multiple Languages'],
    },
    {
        name: 'K-InfoNic',
        nameDis: "(News publishing web application.)",
        image: pr6,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'K-Infonic is a full-stack, feature-rich news publishing web application built with React, Node.js, and MongoDB. It empowers users to submit news articles, while admins manage content approval and access control. Premium content is available for subscribed users, offering a dynamic, real-world publishing experience.',
        liveLink: "https://k-infonic.web.app/",
        githubLink: 'https://github.com/kamrul2006/K-Infonic_ClientSite',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },
    {
        name: 'K-Visa',
        nameDis: "(A Visa Navigator Platform)",
        image: pr2,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'K-VISA is a comprehensive Visa Navigator Portal designed to simplify the process of checking visa requirements and applying online.',
        liveLink: 'https://k-visa-portal.web.app/',
        githubLink: 'https://github.com/kamrul2006/K-Visa',
        challenges: ['Implementing Add, Remove, Update Visa program', 'Designing a responsive layout'],
        futurePlans: ['Adding a comment section', 'Implementing social media sharing'],
    },
    {
        name: 'Lingo-Bingo',
        nameDis: "(A Language Learning Website)",
        image: pr1,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'LINGO BINGO is a fun and interactive language learning application designed to help users expand their vocabulary.',
        liveLink: 'https://lingo-bingo-4a734.web.app/',
        githubLink: 'https://github.com/kamrul2006/Lingo_bingo',
        challenges: ['Implementing Private Routes', 'Designing a responsive layout'],
        futurePlans: ['Adding a comment section', 'Implementing social media sharing'],
    },
    {
        name: 'K-HistoArts',
        nameDis: "(A Historical Artifacts App)",
        image: pr4,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'This is a web application which allows users to browse historical artifacts, view details, and add their own entries.',
        liveLink: 'https://k-histocraft.web.app/',
        githubLink: 'https://github.com/kamrul2006/Histo-Arts',
        challenges: ['Real-time updates synchronization', 'Designing an intuitive user interface', "Fully responsive"],
        futurePlans: ['Adding collaboration features', 'Integrating with calendar apps'],
    },
    {
        name: 'KIBank',
        nameDis: "(Digital banking front-end App)",
        image: ka,
        techStack: ['React', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'A sleek, modern digital banking front-end built using React 19, Tailwind CSS 4, and Vite 6. KI Bank UI is designed for performance, responsiveness, and an intuitive user experience, showcasing a contemporary layout with reusable components, elegant animations, and a scalable codebase.',
        liveLink: 'https://ki-bank-ltd.vercel.app/',
        githubLink: 'https://github.com/kamrul2006/KI-BANK_JT',
        challenges: ['Designing an intuitive user interface', "Fully responsive"],
        futurePlans: ['Adding collaboration features', 'Integrating with calendar apps'],
    },
];

const NextProjects = [
    {
        name: 'Free PS BD',
        nameDis: "( In solidarity with Palestine)",
        image: pp,
        techStack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'Free PS BD is a modern, responsive web application built with Next.js 15, providing real-time news, updates, and resources in solidarity with Palestine. Featuring seamless authentication, role-based access control, and a moderated article publishing system, it empowers communities with reliable information.',

        liveLink: "https://free-ps-bd-next.vercel.app/",
        githubLink: 'https://github.com/kamrul2006/FREE_PS_BD-Next.js-client',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },
    {
        name: 'K-Blogify',
        nameDis: "( Full-stack blogging platform )",
        image: px,
        techStack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'React-Router', 'Next-Auth', "etc."],
        description: 'A modern full-stack blogging platform built with Next.js 15, Express.js, and MongoDB, designed for seamless content creation and management with full authentication support. Deployed on Vercel for frontend and Railway/Render for backend.',

        liveLink: "https://k-blogify.vercel.app/",
        githubLink: 'https://github.com/kamrul2006/K-Blogify-Next.js',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered product recommendations', 'Adding support for multiple currencies'],
    },
    {
        name: 'K-EduNest',
        nameDis: "(Full-stack educational portal)",
        image: ki,
        techStack: ['React', 'Next.js', 'Node.js', 'TailwindCSS', 'React-Router', 'Firebase', "etc."],
        description: 'A modern full-stack blogging platform built with Next.js 15, Express.js, and MongoDB, designed for seamless content creation and management with full authentication support. Deployed on Vercel for frontend and Railway/Render for backend.',

        liveLink: "https://kedunest.vercel.app/",
        githubLink: 'https://github.com/kamrul2006/k-edunest',
        challenges: ['Integrating payment gateway', 'Optimizing performance for large datasets', 'Admin, Moderator and User Role implementation'],
        futurePlans: ['Implementing AI-powered College recommendations', 'Adding support for multiple currencies'],
    },

];

const ProjectCard = ({ project }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="relative group overflow-hidden rounded-2xl shadow-lg border border-lime-400 transform transition duration-500">
            <div className="relative">
                <Fade duration={1500}>
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-48 object-cover rounded-2xl"
                    />
                </Fade>
                <div className="lg:absolute hidden lg:block lg:inset-0 bg-gradient-to-t from-black via-black/60 to-black opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="hidden absolute inset-0 lg:flex flex-col justify-center items-center text-center px-4 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-lime-400 drop-shadow-md mb-2">{project.name}</h3>
                <p className="text-sm text-lime-200 italic mb-3">{project.nameDis}</p>
                <p className="text-xs text-gray-200 mb-4">Full-stack, scalable, and user-focused. Explore for tech details & live demo!</p>
                <button
                    className="bg-lime-600 text-black font-semibold py-2 px-5 rounded-full hover:bg-lime-700 transition-all duration-300"
                    onClick={() => setShowModal(true)}
                >
                    View Details
                </button>
            </div>

            <div className="md:hidden bg-black text-lime-300 p-4 text-center">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <p className="text-sm italic">{project.nameDis}</p>
                <button
                    className="mt-3 bg-lime-600 text-black font-semibold py-2 px-4 rounded-full hover:bg-lime-700 transition"
                    onClick={() => setShowModal(true)}
                >
                    View Details
                </button>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-2xl w-full max-w-3xl p-6 overflow-y-auto max-h-[85vh]">
                        <img src={project.image} alt={project.name} className="w-full h-64 object-cover rounded-xl" />
                        <h2 className="text-3xl font-bold text-lime-700 mt-4">{project.name} <span className="text-lg text-gray-500">{project.nameDis}</span></h2>
                        <p className="mt-4 text-gray-700"><strong>Technology Stack:</strong> {project.techStack.join(', ')}</p>
                        <p className="mt-2 text-gray-700"><strong>Description:</strong> {project.description}</p>

                        <div className="flex flex-wrap gap-4 mt-4 justify-center">
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-lime-600 text-white py-2 px-6 rounded-lg hover:bg-lime-700 transition">Live Site</a>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="border-2 border-lime-600 text-lime-600 py-2 px-6 rounded-lg hover:bg-lime-100 transition">GitHub</a>
                        </div>

                        <p className="mt-4 text-gray-700"><strong>Challenges:</strong> {project.challenges.join(', ')}</p>
                        <p className="mt-2 text-gray-700"><strong>Future Plans:</strong> {project.futurePlans.join(', ')}</p>

                        <button onClick={() => setShowModal(false)} className="mt-6 w-full bg-lime-600 text-white py-2 rounded-lg hover:bg-lime-700 transition">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const AllProjectsPage = () => {
    const [filter, setFilter] = useState('vite');

    return (
        <section className="bg-gradient-to-b from-lime-950 to-black text-white py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                <aside className="lg:sticky lg:top-20 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-bold text-lime-200 text-center lg:text-left">Explore My<br /><span className="text-5xl lg:text-6xl text-lime-500">Latest Projects</span></h2>
                    <p className="text-lime-300 leading-relaxed text-justify lg:text-left">
                        From fast Vite-based UI to full-fledged apps with Next.js — these projects reflect my full-stack journey. Each one is uniquely built, passionately styled, and performance-optimized.
                    </p>
                    <div className="bg-black/40 border border-lime-600 rounded-xl p-4">
                        <h4 className="text-lime-400 text-lg font-semibold mb-2">View by Stack:</h4>
                        <div className="flex gap-4">
                            <button
                                onClick={() => setFilter('vite')}
                                className={`py-1 px-4 rounded-full font-semibold transition ${filter === 'vite' ? 'bg-lime-600 text-black' : 'bg-transparent text-lime-400 border border-lime-500'}`}
                            >
                                Vite Projects
                            </button>
                            <button
                                onClick={() => setFilter('next')}
                                className={`py-1 px-4 rounded-full font-semibold transition ${filter === 'next' ? 'bg-lime-600 text-black' : 'bg-transparent text-lime-400 border border-lime-500'}`}
                            >
                                Next.js Projects
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <Link to='/contact' className="bg-lime-600 hover:bg-black hover:text-lime-500 border-2 border-transparent hover:border-lime-500 text-black font-semibold px-6 py-2 rounded-full transition-all">
                            Get in Touch
                        </Link>
                    </div>
                </aside>

                <main className="lg:col-span-2 space-y-20">
                    {filter === 'vite' && (
                        <div>
                            <h3 className="text-4xl font-bold text-center text-lime-400 mb-10">Vite Projects</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {projects.map(project => (
                                    <ProjectCard key={project.name} project={project} />
                                ))}
                            </div>
                        </div>
                    )}
                    {filter === 'next' && (
                        <div>
                            <h3 className="text-4xl font-bold text-center text-lime-400 mb-10">Next.js Projects</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {NextProjects.map(project => (
                                    <ProjectCard key={project.name} project={project} />
                                ))}
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </section>
    );
};

export default AllProjectsPage;
