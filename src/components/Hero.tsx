import { ArrowDown } from "lucide-react";
import heroBg from '../assets/hero-bg.jpg';

export const Hero = () => {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1
                }}
            />

            <div className="container mx-auto px-6 z-10 text-center fade-in">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter">
                    Developer
                    <br />
                    <span className="text-gradient">& Designer</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light">
                    Crafting digital experiences through code and creativity
                </p>

                <button
                    onClick={scrollToProjects}
                    className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-accent transition-colors"
                >
                    View Work
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};
