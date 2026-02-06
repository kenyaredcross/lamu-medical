import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CreditCard,
  Smartphone,
  Building2,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We're Here to Help
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out to us anytime. Our team is ready to assist you on your journey to recovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Emergency Card */}
            <div className="bg-primary rounded-2xl p-6 text-primary-foreground shadow-elevated">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/80">24/7 Emergency Line</p>
                  <p className="font-display font-bold text-xl">0703 037 067</p>
                </div>
              </div>
              <Button variant="heroOutline" className="w-full" asChild>
                <a href="tel:0703037067">Call Now</a>
              </Button>
            </div>

            {/* Contact Details */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h3 className="font-display font-bold text-foreground mb-4">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:lamumedical@redcross.or.ke" className="text-foreground hover:text-primary transition-colors">
                      lamumedical@redcross.or.ke
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="text-foreground">
                      108-80500 Lamu, Hindi<br />
                      (off Lamu-Malindi Road)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Operating Hours</p>
                    <p className="text-foreground">Outpatient: 8AM – 5PM</p>
                    <p className="text-foreground">Emergency: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.234567!2d40.1234!3d-2.2234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMTMnMjQuMCJTIDQwwrAwNyczMi4wIkU!5e0!3m2!1sen!2ske!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lamu Medical Centre Location"
              />
            </div>

            {/* Payment Methods */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                Payment Methods
              </h3>
              
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 bg-hope/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-hope/20 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-hope" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">M-Pesa</p>
                    <p className="text-sm text-muted-foreground">Paybill Available</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-calm/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-calm/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-calm" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Visa Card</p>
                    <p className="text-sm text-muted-foreground">Card Payments</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-secondary/10 rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bank Transfer</p>
                    <p className="text-sm text-muted-foreground">EFT Available</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-accent rounded-xl">
                <p className="text-sm text-accent-foreground flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span><strong>SHA Accredited</strong> – Facility Code: FID-05-121828-5</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;