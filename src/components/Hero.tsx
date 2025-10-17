import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      <nav className="absolute top-0 right-0 p-8 z-20">
        <div className="flex gap-8">
          <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors font-medium">About</a>
          <a href="#projects" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Projects</a>
          <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors font-medium">Contacts</a>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative bg-card rounded-[3rem] p-12 shadow-xl animate-fade-in">
            <div className="absolute top-8 left-8 text-sm font-medium text-muted-foreground">Aayati Srivastava</div>
            
            <div className="space-y-6 mt-8">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">
                HELLO, MY NAME IS
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Aayati<br />Srivastava
              </h1>
              <p className="text-base text-muted-foreground max-w-md">
                2nd Year BTech Student at SRMIST passionate about data science and machine learning. Experienced in ML engineering and AI innovation.
              </p>

              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Projects
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8"
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary rounded-full opacity-20" />
          </div>

          <div className="relative hidden md:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-card rounded-[3rem] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                      <span className="text-6xl">👩‍💻</span>
                    </div>
                    <div className="text-foreground/60 font-medium">Data Science Enthusiast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 flex gap-4 z-20">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
           className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <Github className="w-6 h-6" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
           className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <Linkedin className="w-6 h-6" />
        </a>
        <a href="mailto:your.email@example.com"
           className="w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
