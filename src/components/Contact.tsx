import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, opportunities, or collaborations in data science and machine learning.
        </p>

        <Card className="p-8 border-2 hover:border-primary hover:shadow-[var(--shadow-glow)] transition-all duration-300">
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:your.email@example.com"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all group"
            >
              <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-full group-hover:shadow-[var(--shadow-glow)] transition-all">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium">Email</span>
              <span className="text-sm text-muted-foreground text-center">your.email@example.com</span>
            </a>

            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all group"
            >
              <div className="p-4 bg-gradient-to-r from-accent to-primary rounded-full group-hover:shadow-[var(--shadow-glow)] transition-all">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-muted-foreground">Connect with me</span>
            </a>

            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all group"
            >
              <div className="p-4 bg-gradient-to-r from-primary to-accent rounded-full group-hover:shadow-[var(--shadow-glow)] transition-all">
                <Github className="w-6 h-6 text-white" />
              </div>
              <span className="font-medium">GitHub</span>
              <span className="text-sm text-muted-foreground">View my code</span>
            </a>
          </div>

          <div className="mt-8 text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300"
              onClick={() => window.location.href = 'mailto:your.email@example.com'}
            >
              Get In Touch
            </Button>
          </div>
        </Card>

        <footer className="mt-16 text-center text-muted-foreground">
          <p>© 2025 Aayati Srivastava. Built with passion for data science and innovation.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
