import { Card } from "@/components/ui/card";
import { Github, Linkedin, ExternalLink } from "lucide-react";

const SocialProfiles = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Connect With Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-primary group">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-2xl group-hover:shadow-[var(--shadow-glow)] transition-all">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  LinkedIn
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground mb-4">
                  Connect with me professionally and stay updated with my journey in data science and AI.
                </p>
                <a 
                  href="https://www.linkedin.com/in/aayati-srivastava?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_ap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  View Profile
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-accent group">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-r from-accent to-primary rounded-2xl group-hover:shadow-[var(--shadow-glow)] transition-all">
                <Github className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                  GitHub
                  <ExternalLink className="w-5 h-5 text-muted-foreground" />
                </h3>
                <p className="text-muted-foreground mb-4">
                  Explore my code repositories, projects, and contributions to open source.
                </p>
                <a 
                  href="https://github.com/aayati-srivastava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
                >
                  View Repositories
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SocialProfiles;
