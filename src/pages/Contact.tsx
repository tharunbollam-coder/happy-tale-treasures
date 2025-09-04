import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import { generateWebsiteSchema } from "@/utils/seo";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const websiteSchema = generateWebsiteSchema();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to a backend
    toast({
      title: "Message Sent! 📧",
      description: "Thank you for contacting us! We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <SEO 
        title="Contact KidsStories - Get in Touch"
        description="Contact KidsStories for questions, suggestions, or feedback about our educational children's stories and learning activities. We'd love to hear from you!"
        keywords="contact kids stories, feedback children's stories, educational content support, customer service"
        schemaData={websiteSchema}
      />
      
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs />
        
        <div className="text-center mb-12">
          <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="font-comic text-xl text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! 💌
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-primary" />
              <h2 className="font-kid text-2xl text-foreground">Send us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-comic font-bold text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="font-comic"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-comic font-bold text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="font-comic"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block font-comic font-bold text-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="font-comic"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-comic font-bold text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  required
                  className="font-comic min-h-32"
                />
              </div>
              
              <Button type="submit" className="w-full font-comic font-bold text-lg py-3">
                Send Message 🚀
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-8 h-8 text-secondary" />
                <h3 className="font-kid text-xl text-foreground">Email Us</h3>
              </div>
              <p className="font-comic text-muted-foreground">
                hello@kidsstories.com
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Phone className="w-8 h-8 text-accent" />
                <h3 className="font-kid text-xl text-foreground">Call Us</h3>
              </div>
              <p className="font-comic text-muted-foreground">
                +1 (555) 123-KIDS
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="font-kid text-xl text-foreground">Visit Us</h3>
              </div>
              <p className="font-comic text-muted-foreground">
                123 Story Lane<br />
                Reading City, RC 12345<br />
                United States
              </p>
            </div>

            <div className="bg-gradient-soft p-8 rounded-3xl border border-border text-center">
              <div className="text-6xl mb-4" role="img" aria-label="Happy face emoji">😊</div>
              <h3 className="font-kid text-xl text-foreground mb-2">We're Here to Help!</h3>
              <p className="font-comic text-muted-foreground">
                Whether you have questions, suggestions, or just want to say hello, 
                we love hearing from our reading community!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;