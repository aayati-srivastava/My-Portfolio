import { Card } from "@/components/ui/card";
import { Trophy, Award, BookOpen } from "lucide-react";

const Achievements = () => {
  const hackathons = [
    { name: "All India Woman Hackathon", icon: Trophy },
    { name: "ISRO Hackathon", icon: Trophy },
    { name: "Samsung Gen AI Hackathon", icon: Trophy }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30" id="achievements">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-primary">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Hackathons</h3>
            </div>
            
            <div className="space-y-4">
              {hackathons.map((hackathon, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10 hover:border-primary/30 transition-all"
                >
                  <hackathon.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{hackathon.name}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-accent">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-accent to-primary rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-accent/10 hover:border-accent/30 transition-all">
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">NPTEL Courses</p>
                  <p className="text-sm text-muted-foreground">
                    Successfully completed 2 NPTEL certification courses in Computer Science and Data Analytics
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
