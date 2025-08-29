import StoryCard from "@/components/StoryCard";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { stories } from "@/data/stories";
import { BookOpen, Sparkles } from "lucide-react";
import { generateWebsiteSchema } from "@/utils/seo";

const Stories = () => {
  const websiteSchema = generateWebsiteSchema();

  return (
    <div className="min-h-screen py-8 px-4">
      <SEO 
        title="All Educational Stories for Kids | Children's Books with Moral Lessons"
        description={`Browse ${stories.length} educational stories for children ages 3-12. Interactive tales teaching moral lessons with reading activities, spelling games, and comprehension questions.`}
        keywords="children's stories collection, educational books for kids, moral lesson stories, interactive reading activities, kids learning games, bedtime stories with lessons"
        schemaData={websiteSchema}
      />
      
      <div className="container mx-auto">
        <Breadcrumbs />
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-primary" />
            <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent">
              Educational Stories for Kids
            </h1>
            <Sparkles className="w-10 h-10 text-secondary" />
          </div>
          <p className="font-comic text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            🌈 Choose your favorite educational adventure! Each story teaches important life lessons through fun characters and engaging activities! 🌈
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-kid text-primary">{stories.length}</div>
              <div className="text-sm font-comic text-muted-foreground">Educational Stories</div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-kid text-secondary">3-12</div>
              <div className="text-sm font-comic text-muted-foreground">Age Range (Years)</div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-kid text-accent">5-6</div>
              <div className="text-sm font-comic text-muted-foreground">Minutes Reading</div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Future Stories Preview */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-soft p-8 rounded-3xl border-2 border-dashed border-primary/30">
            <div className="text-6xl mb-4" role="img" aria-label="Crystal ball emoji">🔮</div>
            <h2 className="font-kid text-2xl text-foreground mb-3">More Educational Stories Coming Soon!</h2>
            <p className="font-comic text-muted-foreground">
              We're creating even more magical learning adventures with valuable lessons! 
              <br />
              Stay tuned for new tales of friendship, courage, honesty, and discovery! ✨
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stories;