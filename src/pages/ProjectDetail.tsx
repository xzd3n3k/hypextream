import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import {Button} from "../components/Button.tsx";
import synaptosLogo from "../assets/synaptos-digital-logo.png";
import itsTimeWeb from "../assets/itstime-web.png";
import colorlyWeb from "../assets/colorly-web.png";

const projectsData = {
    "colorly": {
        title: "Colorly",
        category: "Web Development",
        image: colorlyWeb,
        date: "2025",
        tags: ["React", "Vite", "Tailwind CSS v4", "TypeScript", "Frontend", "Web App", "Color Palettes"],
        description: "A fast, minimal web app for creating, copying, sharing, and viewing color palettes directly in the browser. Designed for designers and developers who want instant color inspiration without distractions.",
        challenge: "I wanted to build a modern, high-performance color tool that feels instant and intuitive, without relying on large frameworks or backend services. The focus was on clean UX, minimal load times, and a polished, cohesive interface.",
        solution: "Developed with React and Vite for optimal performance and rapid iteration, styled entirely with Tailwind CSS v4 for a sleek and consistent look. The app generates and displays color palettes in real time, enabling easy sharing and copying through a simple, responsive UI.",
        link: "https://colorly.cloud",
    },
    "its-time-business-website": {
        title: "It’s Time – Business Website",
        category: "Web Development",
        image: itsTimeWeb,
        date: "2025",
        tags: ["Svelte", "SvelteKit", "TypeScript", "SCSS", "Python", "Flask", "Frontend", "Backend", "smtplib"],
        description: "A modern, fast-loading business website for a local company built with SvelteKit and Flask. The site serves as both a presentation platform and a contact portal, designed with performance and simplicity in mind.",
        challenge: "The client wanted a lightweight, SEO-friendly website with a custom contact form that could securely send emails directly to their inbox without using third-party services. It also needed a consistent, professional design and smooth animations, while keeping deployment and hosting minimalistic.",
        solution: "I developed the frontend in SvelteKit for fast rendering and transitions, and created a Flask-based backend to handle form submissions securely via Python’s smtplib. The entire system was styled using SCSS for maintainable and responsive design. Thanks to SvelteKit’s SSR, the site loads instantly and ranks well on search engines.",
        link: "https://itstime.cz",
    },
    "synaptos-digital-logo": {
        title: "Synaptos Digital Logo",
        category: "Graphic Design",
        image: synaptosLogo,
        date: "2025",
        tags: ["Logo Design", "Branding", "Adobe Illustrator", "Color Theory", "Color Palette"],
        description: "Branding package including logo design, color palette and typography system for a tech startup.",
        challenge: "Creating a memorable visual identity that balances professionalism with approachability while standing out in a crowded market.",
        solution: "Developed a clean, geometric logo with a modern color scheme and versatile design system that works across digital and print media.",
        link: "",
    },
};

export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();
    const project = id ? projectsData[id as keyof typeof projectsData] : null;

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project not found</h1>
                    <Link to="/">
                        <Button variant="outline">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
                <div className="mx-auto px-6 py-4">
                    <Link to="/">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>
                    </Link>
                </div>
            </nav>

            <main className="pt-20">
                <div className="container mx-auto px-6 py-12 max-w-5xl">
                    <div className="mb-8 fade-in">
                        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                            {project.category}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {project.date}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm"
                                >
                  <Tag className="w-3 h-3" />
                                    {tag}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className="aspect-video overflow-hidden rounded-lg mb-12 fade-in">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-lg max-w-none mb-12 fade-in">
                        <h2 className="text-3xl font-bold mb-4">Overview</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>

                        <h2 className="text-3xl font-bold mb-4 mt-12">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.challenge}
                        </p>

                        <h2 className="text-3xl font-bold mb-4 mt-12">The Solution</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {project.solution}
                        </p>
                    </div>

                    <div className="flex gap-4 fade-in">
                        {
                            project.link
                            ? <Button size="lg" className="gap-2" hasChild>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        View Live Project
                                        <ExternalLink className="w-4 h-4" />
                                    </a>
                                </Button>
                            : null
                        }
                        <Button variant="outline" size="lg" hasChild>
                            <Link to="/">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                All Projects
                            </Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
