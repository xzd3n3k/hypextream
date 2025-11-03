import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./Button";

export const Contact = () => {

    const handleEmailClick = () => {
        window.location.href = "mailto:xzdeneknemec@gmail.com";
    };

    const handleGithubClick = () => {
        window.open("https://github.com/xzd3n3k", "_blank");
    };

    const handleLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/hypextream/", "_blank");
    };

    return (
        <footer className="py-24 px-6 border-t">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                        Let's Work Together
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8">
                        Have a project in mind? Feel free to reach out.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Button onClick={handleEmailClick} variant="default" size="lg" className="gap-2">
                            <Mail className="w-4 h-4" />
                            Email Me
                        </Button>
                        <Button onClick={handleGithubClick} variant="outline" size="lg" className="gap-2">
                            <Github className="w-4 h-4" />
                            GitHub
                        </Button>
                        <Button onClick={handleLinkedinClick} variant="outline" size="lg" className="gap-2">
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </Button>
                    </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    <p>© 2025 HypeXTream. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
