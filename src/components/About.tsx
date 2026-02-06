import { Shield, Handshake, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professionals providing compassionate care"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-card rounded-2xl p-6 shadow-elevated border border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <Shield className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-lg">SHA Accredited</p>
                  <p className="text-sm text-muted-foreground">FID-05-121828-5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Partnership for<br />
              <span className="text-secondary">Community Wellness</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6">
              Established in 2019, Lamu Medical Centre is a collaborative initiative 
              between the Italian Red Cross and Lamu County Government, dedicated to 
              providing accessible rehabilitation and mental health services.
            </p>

            <p className="text-muted-foreground mb-8">
              Under the leadership of Frankline Ogutu (Acting In-Charge), our 
              multidisciplinary team of medical professionals, therapists, and 
              counselors works together to ensure every individual receives 
              dignified, comprehensive care.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Handshake className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Partnership</h3>
                  <p className="text-sm text-muted-foreground">
                    Italian Red Cross & Lamu County working together
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">
                    Holistic recovery with dignity and respect
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-hope/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-hope" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Compassion</h3>
                  <p className="text-sm text-muted-foreground">
                    Non-judgmental, patient-centered care
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-warmth/10 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-warmth" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Confidentiality</h3>
                  <p className="text-sm text-muted-foreground">
                    Your privacy is our priority
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;