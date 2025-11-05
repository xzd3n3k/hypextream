import {Hero} from "../components/Hero.tsx";
import {Contact} from "../components/Contact.tsx";
import {Projects} from "../components/Projects.tsx";

const Index = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Projects />
            <Contact />
        </div>
    )
}

export default Index;
