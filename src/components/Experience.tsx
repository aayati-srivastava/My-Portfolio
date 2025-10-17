import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="experience">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-primary">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Data Science Intern</h3>
                <p className="text-accent font-medium mb-4">1Stop</p>
                <p className="text-muted-foreground leading-relaxed">
                  Gained hands-on experience in data science and machine learning projects. 
                  Worked on real-world datasets, developed predictive models, and contributed 
                  to data-driven decision making processes. Applied various ML algorithms and 
                  data analysis techniques to solve business problems.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
