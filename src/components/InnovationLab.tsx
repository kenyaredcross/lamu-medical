import { 
  Lightbulb, 
  Printer, 
  Palette, 
  Hammer,
  BookOpen,
  Users,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  { icon: Printer, label: "3D Printing" },
  { icon: Palette, label: "Graphic Design" },
  { icon: Hammer, label: "Woodwork" },
  { icon: BookOpen, label: "Digital Literacy" },
];

const InnovationLab = () => {
  return (
    <section id="innovation" className="py-20 md:py-28 bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-4 py-2 mb-6">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium">I.O.Me 005 Innovation Lab</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Skills for a<br />
              <span className="text-secondary">Brighter Future</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-6">
              Our Innovation Lab provides practical skills training to support recovery 
              and prevent relapse. By learning valuable trades and digital skills, 
              clients gain confidence and economic independence.
            </p>

            <p className="text-primary-foreground/70 mb-8">
              The lab offers hands-on training in various disciplines, 
              helping individuals build a pathway to sustainable employment 
              and community reintegration.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {skills.map((skill) => (
                <div 
                  key={skill.label}
                  className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl p-4 border border-primary-foreground/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-medium">{skill.label}</span>
                </div>
              ))}
            </div>

            <Button variant="secondary" size="lg" asChild>
              <a href="#contact">
                Explore the Lab
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary/20 to-primary/20 p-8 md:p-12">
              <div className="w-full h-full rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 flex items-center justify-center relative overflow-hidden">
                {/* Animated icons */}
                <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center animate-float">
                  <Printer className="w-8 h-8 text-secondary" />
                </div>
                <div className="absolute top-12 right-12 w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center animate-float" style={{ animationDelay: "0.5s" }}>
                  <Palette className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute bottom-12 left-12 w-14 h-14 rounded-xl bg-warmth/20 flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                  <Hammer className="w-7 h-7 text-warmth" />
                </div>
                <div className="absolute bottom-8 right-8 w-16 h-16 rounded-xl bg-hope/20 flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                  <BookOpen className="w-8 h-8 text-hope" />
                </div>

                {/* Center content */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-secondary/30 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-12 h-12 text-secondary" />
                  </div>
                  <p className="font-display font-bold text-xl">Empowering</p>
                  <p className="text-primary-foreground/70">Recovery Through Skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationLab;