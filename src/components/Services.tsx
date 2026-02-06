import { 
  Bed, 
  Clock, 
  AlertCircle, 
  Users, 
  Brain, 
  Heart,
  Stethoscope,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bed,
    title: "Inpatient Services",
    description: "30-bed residential treatment facility with 2 wards providing comprehensive addiction and mental health care.",
    features: ["Addiction Treatment", "Mental Health Management", "24/7 Medical Care"],
    color: "primary",
  },
  {
    icon: Clock,
    title: "Outpatient Services",
    description: "Walk-in and scheduled appointments available 8AM to 5PM for ongoing care and support.",
    features: ["General Medical Services", "Psychotherapy", "Follow-up Care"],
    color: "secondary",
  },
  {
    icon: AlertCircle,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services for crisis intervention and urgent mental health needs.",
    features: ["Crisis Intervention", "Emergency Stabilization", "Immediate Assessment"],
    color: "destructive",
  },
  {
    icon: Users,
    title: "Family Therapy",
    description: "Holistic approach involving families in the recovery process for lasting healing.",
    features: ["Group Sessions", "Family Counseling", "Support Networks"],
    color: "hope",
  },
  {
    icon: Brain,
    title: "Psychotherapy",
    description: "Evidence-based therapeutic interventions by trained mental health professionals.",
    features: ["Individual Therapy", "CBT", "Trauma-Informed Care"],
    color: "calm",
  },
  {
    icon: Heart,
    title: "Community Outreach",
    description: "Quarterly medical camps and psychosocial support reaching 3,500+ community members.",
    features: ["Medical Camps", "Education Programs", "Stigma Reduction"],
    color: "warmth",
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  destructive: "bg-destructive/10 text-destructive",
  hope: "bg-hope/10 text-hope",
  calm: "bg-calm/10 text-calm",
  warmth: "bg-warmth/10 text-warmth",
};

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <Stethoscope className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Services</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Care for<br />
            <span className="text-secondary">Mind, Body & Spirit</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our multidisciplinary team provides holistic treatment approaches 
            tailored to each individual's unique recovery journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-5">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="calm" size="lg" asChild>
            <a href="#contact">Learn More About Our Programs</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;