import { ProjectCard } from "./ProjectCard";
import synaptosLogo from "../assets/synaptos-digital-logo.png";
import itsTimeWeb from "../assets/itstime-web.png";
import colorlyWeb from "../assets/colorly-web.png";

const projects = [
    {
        id: "colorly",
        title: "Colorly",
        category: "Web Development",
        image: colorlyWeb,
        description: "A fast and minimal React + Vite web app styled with Tailwind CSS v4 for creating color palettes."
    },
    {
        id: "its-time-business-website",
        title: "It’s Time – Business Website",
        category: "Web Development",
        image: itsTimeWeb,
        description: "A modern, fast-loading business website for a local company built with SvelteKit.",
    },
    {
        id: "synaptos-digital-logo",
        title: "Synaptos Digital Logo",
        category: "Graphic Design",
        image: synaptosLogo,
        description: "Branding package including logo design, color palette."
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto">
                <div className="mb-16 fade-in">
                    <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter">
                        Selected Work
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A collection of recent projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
