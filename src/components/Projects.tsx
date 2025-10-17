import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Credit EDA",
      description: "Exploratory Data Analysis on credit card data to identify patterns, trends, and insights for risk assessment and decision making.",
      tags: ["Python", "Pandas", "Data Visualization", "EDA"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Spam SMS Detection",
      description: "Machine learning model to classify SMS messages as spam or legitimate using NLP techniques and classification algorithms.",
      tags: ["NLP", "Machine Learning", "Classification", "Scikit-learn"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Hate Speech Detection",
      description: "Deep learning model to identify and classify hate speech in text data, contributing to safer online communities.",
      tags: ["Deep Learning", "NLP", "TensorFlow", "Text Classification"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Finance Website for Women",
      description: "Web application designed to empower women with financial literacy and tools for better financial planning and management.",
      tags: ["Web Development", "Finance", "React", "UI/UX"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 px-4" id="projects">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 border-2 hover:border-primary group cursor-pointer"
            >
              <div className={`h-2 w-20 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />
              
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge 
                    key={tag}
                    variant="secondary"
                    className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                <span>View Details</span>
                <ExternalLink className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
