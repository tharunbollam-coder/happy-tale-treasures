import SEO from "../components/SEO";
import Breadcrumbs from "../components/Breadcrumbs";
import { Card, CardContent, CardHeader } from "../components/ui/Card";
import { Heart, Star, Book } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <SEO 
        title="About KidsStories - Educational Children's Content Platform"
        description="Learn about KidsStories mission to provide safe, educational, and engaging stories for children with valuable life lessons and interactive learning activities."
      />
      
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' }
        ]} />
        
        <div className="text-center mb-12">
          <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent mb-4">
            About KidsStories
          </h1>
          <p className="font-comic text-lg text-muted-foreground max-w-2xl mx-auto">
            Creating magical educational experiences for young minds! ✨
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <h2 className="font-kid text-2xl flex items-center gap-2">
                <Heart className="w-8 h-8 text-primary" />
                Our Mission
              </h2>
            </CardHeader>
            <CardContent>
              <p className="font-comic text-foreground leading-relaxed">
                At KidsStories, we believe every child deserves access to beautiful, educational stories that not only entertain but also teach valuable life lessons. Our carefully crafted tales focus on friendship, kindness, honesty, perseverance, and other essential values that help shape young characters.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/10 to-accent/10">
            <CardHeader>
              <h2 className="font-kid text-2xl flex items-center gap-2">
                <Star className="w-8 h-8 text-secondary" />
                What Makes Us Special
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-comic font-bold text-lg mb-2">📚 Educational Focus</h3>
                  <p className="font-comic text-muted-foreground">Every story includes moral lessons and learning opportunities.</p>
                </div>
                <div>
                  <h3 className="font-comic font-bold text-lg mb-2">🎨 Interactive Activities</h3>
                  <p className="font-comic text-muted-foreground">Spelling games, comprehension questions, and creative exercises.</p>
                </div>
                <div>
                  <h3 className="font-comic font-bold text-lg mb-2">🛡️ Safe Environment</h3>
                  <p className="font-comic text-muted-foreground">Age-appropriate, positive content for all children.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;