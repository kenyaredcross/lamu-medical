import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CreditCard,
  Smartphone,
  Building2,
  Shield,
  Send,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    action: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.subject || !formData.action || !formData.message) {
      toast({ 
        title: "Please fill in all required fields", 
        variant: "destructive" 
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Firebase Firestore
      const docRef = await addDoc(collection(db, "contact_submissions"), {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        action: formData.action,
        message: formData.message,
        timestamp: serverTimestamp(),
        status: "new", // Track if it's been handled
      });

      console.log("Document written with ID: ", docRef.id);

      // Send email notification to lamu.medical@redcross.or.ke
      // This will be handled by Google Apps Script
      await fetch(
        "https://script.google.com/macros/s/AKfycbwNvppB4DNLxaCKszqxYa37fatZtUpsA4UOfKMCO1zpmI5UmVi4TIer6v0hvGfRJxCVeA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            action: formData.action,
            message: formData.message,
            timestamp: new Date().toISOString(),
          }),
        }
      );

      toast({ 
        title: "Message sent successfully!", 
        description: "We'll get back to you shortly." 
      });
      
      // Clear form
      setFormData({ 
        fullName: "", 
        email: "", 
        phone: "", 
        subject: "", 
        action: "", 
        message: "" 
      });
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({ 
        title: "Failed to send message", 
        description: "Please try again or contact us directly at lamu.medical@redcross.or.ke",
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

        {/* Talk To Us Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground">Talk To Us</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    placeholder="Your full name" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    maxLength={100} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    maxLength={255} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone *</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="+254 7XX XXX XXX" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    maxLength={20} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Subject of your message" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    maxLength={150} 
                    required 
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>I want to *</Label>
                <Select 
                  value={formData.action} 
                  onValueChange={(val) => setFormData((prev) => ({ ...prev, action: val }))} 
                  required
                  disabled={isSubmitting}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">Make a General Inquiry</SelectItem>
                    <SelectItem value="concern">Report a Concern</SelectItem>
                    <SelectItem value="partnership">Seek Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Write your message here..." 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                  maxLength={1000} 
                  required 
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
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
                    <a href="mailto:lamu.medical@redcross.or.ke" className="text-foreground hover:text-primary transition-colors">
                      lamu.medical@redcross.or.ke
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