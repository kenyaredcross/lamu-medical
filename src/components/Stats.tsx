import { Users, Home, Heart, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "853+",
    label: "Outpatients Annually",
    description: "Individuals receiving quality care",
  },
  {
    icon: Home,
    value: "30",
    label: "Inpatient Beds",
    description: "For residential treatment",
  },
  {
    icon: Heart,
    value: "3,500+",
    label: "Outreach Beneficiaries",
    description: "Community members reached",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years of Service",
    description: "Established in 2019",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-20 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Serving the Lamu community with dedication and compassion since 2019
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative bg-background rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <stat.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </h3>
              <p className="font-semibold text-foreground text-sm md:text-base mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;