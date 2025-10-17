import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Brain } from "lucide-react";

const About = () => {
  const skills = [
    "Python", "Machine Learning", "Data Analysis", "Deep Learning",
    "Natural Language Processing", "TensorFlow", "Scikit-learn", "Pandas",
    "Data Visualization", "Web Development"
  ];

  return (
    <section className="py-20 px-4" id="about">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-primary">
            <GraduationCap className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">
              BTech (2nd Year)<br />
              SRMIST
            </p>
          </Card>

          <Card className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-accent">
            <Code className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-muted-foreground">
              Data Science<br />
              Machine Learning & AI
            </p>
          </Card>

          <Card className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-primary">
            <Brain className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Passion</h3>
            <p className="text-muted-foreground">
              Building innovative solutions<br />
              using data & AI
            </p>
          </Card>
        </div>

        <Card className="p-8">
          <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium hover:shadow-[var(--shadow-glow)] transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
