import StoryCard from "@/components/StoryCard";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { stories } from "@/data/stories";
import { BookOpen, Sparkles, Search, Filter } from "lucide-react";
import { generateWebsiteSchema } from "@/utils/seo";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Stories = () => {
  const websiteSchema = generateWebsiteSchema();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("");

  // Get unique categories and age groups for filters
  const categories = Array.from(new Set(stories.map(story => story.category)));
  const ageGroups = Array.from(new Set(stories.map(story => story.ageGroup)));

  // Filter stories based on search and filters
  const filteredStories = useMemo(() => {
    return stories.filter(story => {
      const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           story.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           story.moralLesson.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || story.category === selectedCategory;
      const matchesAgeGroup = !selectedAgeGroup || story.ageGroup === selectedAgeGroup;
      
      return matchesSearch && matchesCategory && matchesAgeGroup;
    });
  }, [searchTerm, selectedCategory, selectedAgeGroup]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedAgeGroup("");
  };

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

        {/* Search and Filters */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-comic font-bold">Find Your Perfect Story</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Category</label>
              <div className="flex flex-wrap gap-1">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(selectedCategory === category ? "" : category)}
                    className="text-xs h-8"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Age Group</label>
              <div className="flex flex-wrap gap-1">
                {ageGroups.map(ageGroup => (
                  <Button
                    key={ageGroup}
                    variant={selectedAgeGroup === ageGroup ? "secondary" : "outline"}
                    size="sm"
                    onClick={() => setSelectedAgeGroup(selectedAgeGroup === ageGroup ? "" : ageGroup)}
                    className="text-xs h-8"
                  >
                    {ageGroup}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm || selectedCategory || selectedAgeGroup) && (
            <div className="mt-4 flex justify-center">
              <Button
                onClick={clearFilters}
                variant="outline"
                size="sm"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="bg-card p-4 rounded-2xl shadow-lg border border-border">
            <div className="text-center">
              <div className="text-2xl font-kid text-primary">{filteredStories.length}</div>
              <div className="text-sm font-comic text-muted-foreground">
                {filteredStories.length === stories.length ? "Educational Stories" : "Stories Found"}
              </div>
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
        {filteredStories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4" role="img" aria-label="Sad face emoji">😔</div>
            <h3 className="font-kid text-2xl text-foreground mb-2">No Stories Found</h3>
            <p className="font-comic text-muted-foreground mb-4">
              Try adjusting your search or filters to find more stories!
            </p>
            <Button onClick={clearFilters} className="font-comic">
              Clear All Filters
            </Button>
          </div>
        )}

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