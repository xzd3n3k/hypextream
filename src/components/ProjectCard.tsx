import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import {Card} from "./Card.tsx";


interface ProjectCardProps {
    id: string;
    title: string;
    category: string;
    image: string;
    description: string;
}

export const ProjectCard = ({ id, title, category, image, description }: ProjectCardProps) => {
    return (
        <Link to={`/project/${id}`}>
            <Card className="group overflow-hidden border-0 bg-card hover-lift cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                {category}
                            </p>
                            <h3 className="text-2xl font-semibold group-hover:text-accent transition-colors">
                                {title}
                            </h3>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </div>

                    <p className="text-muted-foreground text-sm line-clamp-2">
                        {description}
                    </p>
                </div>
            </Card>
        </Link>
    );
};
