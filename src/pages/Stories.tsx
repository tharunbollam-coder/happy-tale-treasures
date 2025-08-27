import StoryCard from "@/components/StoryCard";
import { stories } from "@/data/stories";
import { BookOpen, Sparkles } from "lucide-react";

const Stories = () => {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-primary" />
            <h1 className="font-kid text-4xl md:text-5xl bg-gradient-rainbow bg-clip-text text-transparent">
              All Stories
            </h1>
            <Sparkles className="w-10 h-10 text-secondary" />
          </div>
          <p className="font-comic text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            🌈 Choose your favorite adventure! Each story is packed with fun characters and important lessons! 🌈
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-kid text-primary">{stories.length}</div>
              <div className="text-sm font-comic text-muted-foreground">Stories Available</div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-kid text-secondary">3-9</div>
              <div className="text-sm font-comic text-muted-foreground">Age Range</div>
            </div>
          </div>
          <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-kid text-accent">5-6</div>
              <div className="text-sm font-comic text-muted-foreground">Minutes Each</div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>

        {/* Empty State for Future Stories */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-soft p-8 rounded-3xl border-2 border-dashed border-primary/30">
            <div className="text-6xl mb-4">🔮</div>
            <h3 className="font-kid text-2xl text-foreground mb-3">More Stories Coming Soon!</h3>
            <p className="font-comic text-muted-foreground">
              We're working on bringing you even more magical adventures! 
              <br />
              Stay tuned for new tales of friendship, courage, and discovery! ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;