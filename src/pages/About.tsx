import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, BookOpen, Users, Sparkles } from "lucide-react";
import { generateWebsiteSchema } from "@/utils/seo";

const About = () => {
  const websiteSchema = generateWebsiteSchema();

  return (
    <div className="min-h-screen py-8 px-4">
      <SEO 
        title="About KidsStories - Educational Stories for Children"
        description="Learn about KidsStories, our mission to provide educational and entertaining stories for children with valuable life lessons, reading activities, and learning games."
        keywords="about kids stories, educational children's content, moral lessons for kids, children's learning platform, interactive storytelling"
        schemaData={websiteSchema}
      />
      
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs />
        
        <div className="text-center mb-12">
          <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent mb-4">
            About KidsStories
          </h1>
          <p className="font-comic text-xl text-muted-foreground max-w-2xl mx-auto">
            Where imagination meets education! 🌈
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="font-kid text-2xl text-foreground">Our Mission</h2>
            </div>
            <p className="font-comic text-muted-foreground leading-relaxed">
              We believe every child deserves access to beautiful, educational stories that teach important life lessons. 
              Our carefully crafted tales combine entertainment with learning, helping children develop reading skills, 
              moral values, and a lifelong love of literature.
            </p>
          </div>

          <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-secondary" />
              <h2 className="font-kid text-2xl text-foreground">What We Offer</h2>
            </div>
            <ul className="font-comic text-muted-foreground space-y-2">
              <li>📚 Educational stories with moral lessons</li>
              <li>🎮 Interactive spelling games</li>
              <li>❓ Reading comprehension questions</li>
              <li>🎨 Beautiful illustrations</li>
              <li>👶 Age-appropriate content (3-12 years)</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-soft p-8 rounded-3xl border border-border mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-10 h-10 text-primary" />
              <h2 className="font-kid text-3xl text-foreground">Our Values</h2>
              <Sparkles className="w-10 h-10 text-accent" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3" role="img" aria-label="Education emoji">📖</div>
                <h3 className="font-kid text-xl text-foreground mb-2">Education First</h3>
                <p className="font-comic text-muted-foreground">Every story teaches valuable lessons</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3" role="img" aria-label="Fun emoji">🎉</div>
                <h3 className="font-kid text-xl text-foreground mb-2">Fun Learning</h3>
                <p className="font-comic text-muted-foreground">Making education enjoyable and engaging</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3" role="img" aria-label="Safe emoji">🛡️</div>
                <h3 className="font-kid text-xl text-foreground mb-2">Safe Content</h3>
                <p className="font-comic text-muted-foreground">Age-appropriate and family-friendly</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-3xl shadow-lg border border-border mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-10 h-10 text-primary" />
              <h2 className="font-kid text-3xl text-foreground">Our Story Creation Process</h2>
              <BookOpen className="w-10 h-10 text-accent" />
            </div>
            <div className="max-w-3xl mx-auto">
              <p className="font-comic text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in transparency about how our stories are created. Our educational stories are crafted 
                using advanced AI technology combined with careful human oversight and editorial review.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-soft p-6 rounded-2xl border border-border">
                  <div className="text-3xl mb-3" role="img" aria-label="AI emoji">🤖</div>
                  <h3 className="font-kid text-xl text-foreground mb-3">AI-Assisted Creation</h3>
                  <p className="font-comic text-muted-foreground">
                    We use AI tools to help generate creative, age-appropriate stories with educational value, 
                    ensuring consistent quality and engaging content for children.
                  </p>
                </div>
                <div className="bg-gradient-soft p-6 rounded-2xl border border-border">
                  <div className="text-3xl mb-3" role="img" aria-label="Human review emoji">👥</div>
                  <h3 className="font-kid text-xl text-foreground mb-3">Human Review & Editing</h3>
                  <p className="font-comic text-muted-foreground">
                    Every story undergoes careful human review and editing to ensure educational value, 
                    appropriate content, and alignment with our mission of combining fun with learning.
                  </p>
                </div>
              </div>
              <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                <p className="font-comic text-sm text-muted-foreground">
                  <strong className="text-foreground">Our Commitment:</strong> While we use AI to help create content, 
                  we maintain strict editorial standards and human oversight to ensure all stories meet our 
                  educational goals and safety standards for children.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-kid text-2xl text-foreground mb-4">Join Our Reading Adventure!</h2>
          <p className="font-comic text-muted-foreground mb-6">
            Help your children discover the magic of reading while learning important life lessons. 
            Our stories are designed to spark imagination, teach values, and create lasting memories.
          </p>
          <div className="flex justify-center">
            <a 
              href="/stories" 
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-comic font-bold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105"
            >
              Start Reading Stories! 📚
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;