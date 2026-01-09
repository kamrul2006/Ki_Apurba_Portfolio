import pr1 from "/Projects/pro1.jpg";
import pr2 from "/Projects/pr2.jpg";
import pr5 from "/Projects/pr5.jpg";
import pr6 from "/Projects/prX.png";
import prb from "/Projects/prb.png";
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from "react-router";

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
        nameDis: "(Digital platform that brings together memories.)",
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
];

const ProjectCard = ({ project }) => {

    return (
        <Slide direction="right">
            <div className="bg-black border border-lime-400 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out w-full p-3 hover:scale-x-105 hover:bg-lime-950">

                <Fade duration={1500}>
                    <img src={project.image} alt={project.name} className="w-full lg:h-20 h-40 object-cover rounded-xl mb-4 border-2" />
                </Fade>

                <h3 className="text-2xl font-semibold  text-lime-500">{project.name}</h3>
                <h4 className="text-md text-gray-400 ">{project.nameDis}</h4>


            </div>
        </Slide>
    );
};

const ProjectsSection = () => {
    return (
        <section id="portfolio" className="pt-16 bg-gradient-to-b from-lime-950 to-black text-white ">


            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
                {/* -----------------text and info----------------- */}

                <div>
                    <Fade duration={2000} >
                        <h2
                            className="lg:text-4xl text-3xl font-bold text-lime-200 mb-4 text-center lg:text-left lg:pl-10">
                            My Recent &
                            <br />
                            <span className="lg:text-6xl text-5xl text-lime-500">Latest Projects</span>
                        </h2>

                        <p className="text-xl text-center lg:text-justify px-3 lg:px-10">
                            Welcome to my project section. I love to build projects with React , Vite , Next.js.
                            <br />
                            I also love to work with Tailwind CSS, DaisyUI, Flowbite and many other react tools (e.g: React-hook-form, React-awesome-revel, React-typewriter etc) for UI Development.
                            <br />
                            For Backend Work I know about Node.js, Express.js , MongoDB, JWT etc.
                        </p>

                        <p className="text-xl text-center lg:text-left px-3 text-lime-400 lg:px-10">
                            Here are some Project Completed by myself. <br />
                            Click on the <span className="underline">"See all Project"</span> button bellow to see all the projects.
                        </p>

                        <div className="flex items-center lg:pl-10 py-5 lg:py-10 ">
                            <Link to={'/projects'}
                                className="py-2  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600  gap-3 hover:drop-shadow-2xl hover:drop-shadow-lime-950 font-semibold w-full lg:w-fit hidden lg:block">
                                See All Projects
                            </Link>
                        </div>
                    </Fade>
                </div>

                {/* --------------Projects card-------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-4">
                    {projects.map((project) => (
                        <Link to={'/projects'}>
                            <ProjectCard key={project.nameDis} project={project} />
                        </Link>
                    ))}
                </div>
            </div>



            <div className="flex items-center justify-center py-5 lg:py-10">
                <Link to={'/projects'}
                    className="py-2  px-5 lg:px-9 lg:text-lg rounded-full bg-lime-600 text-black hover:border-2 hover:bg-black transition hover:border-lime-600 hover:text-lime-600 lg:hidden hover:drop-shadow-2xl hover:drop-shadow-lime-950 font-semibold w-full lg:w-fit text-center mx-4">
                    See All Projects
                </Link>
            </div>

        </section>
    );
};

export default ProjectsSection;
