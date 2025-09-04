import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import StoryCard from "@/components/StoryCard";
import SEO from "@/components/SEO";
import { stories } from "@/data/stories";
import { Sparkles, Star, Heart } from "lucide-react";
import heroImage from "@/assets/hero-stories.jpg";
import { generateWebsiteSchema, generateFAQSchema } from "@/utils/seo";

const Home = () => {
  const featuredStories = stories.slice(0, 3);

  const combinedSchema = [
    generateWebsiteSchema(),
    generateFAQSchema()
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="KidsStories - Educational Tales That Teach Life Lessons | Interactive Reading for Kids"
        description="Discover magical educational stories for children ages 3-12. Interactive tales with moral lessons, reading activities, spelling games, and comprehension questions. Safe, fun learning!"
        keywords="kids stories, educational stories for children, moral lessons kids, interactive reading activities, children's books online, bedtime stories with lessons, reading comprehension games, spelling activities for kids"
        schemaData={combinedSchema}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-soft overflow-hidden">
        <div className="absolute inset-0 bg-gradient-rainbow opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <img 
              src={heroImage} 
              alt="Magical children's storybook with colorful illustrations showing fairy tale characters and educational themes for kids learning" 
              className="mx-auto rounded-3xl shadow-2xl max-w-4xl w-full h-64 md:h-96 object-cover"
              loading="eager"
              width="800"
              height="400"
            />
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-rainbow-yellow animate-pulse" />
            <h1 className="font-kid text-4xl md:text-6xl bg-gradient-rainbow bg-clip-text text-transparent">
              Welcome to KidsStories!
            </h1>
            <Sparkles className="w-8 h-8 text-rainbow-pink animate-pulse" />
          </div>
          
          <p className="font-comic text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            🌟 Discover magical tales that teach valuable lessons! 🌟
            <br />
            Every story is an adventure filled with friendship, kindness, and learning!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/stories">
              <Button size="lg" className="font-comic font-bold text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg">
                <Heart className="w-5 h-5 mr-2" />
                Explore All Stories
              </Button>
            </Link>
            <Button 
              variant="secondary" 
              size="lg" 
              className="font-comic font-bold text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Star className="w-5 h-5 mr-2" />
              Random Story
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Stories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-kid text-3xl md:text-4xl text-foreground mb-4">
              ✨ Featured Educational Stories ✨
            </h2>
            <p className="font-comic text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your reading adventure with these wonderful tales full of life lessons!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/stories">
              <Button 
                variant="outline" 
                size="lg" 
                className="font-comic font-bold text-lg px-8 py-4 rounded-full border-2 hover:scale-105 transition-all duration-200"
                aria-label="View all educational stories for children"
              >
                See All Stories →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Series Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-kid text-3xl md:text-4xl text-foreground mb-4">
              📖 New: Story Series! 📖
            </h2>
            <p className="font-comic text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow amazing adventures chapter by chapter! Just like your favorite shows, but in stories!
            </p>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-border/50 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 fill-current flex-shrink-0" />
                  <span className="font-comic font-bold text-primary text-sm sm:text-base">NEW CHAPTERS WEEKLY!</span>
                </div>
                <h3 className="font-kid text-xl sm:text-2xl lg:text-3xl text-foreground mb-3 sm:mb-4">
                  The Magic Forest Adventures
                </h3>
                <p className="font-comic text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                  Join Luna and her magical friends on weekly adventures! Each chapter brings new mysteries, 
                  friendships, and lessons in this ongoing series.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/series" className="w-full sm:w-auto">
                    <Button size="lg" className="font-comic font-bold w-full sm:w-auto">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Explore Series
                    </Button>
                  </Link>
                  <Link to="/series/magic-forest-adventures/chapter/chapter-1" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="font-comic font-bold w-full sm:w-auto">
                      Start Reading →
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img 
                  src="/src/assets/magic-forest.jpg" 
                  alt="The Magic Forest Adventures series cover showing Luna and magical creatures in an enchanted forest"
                  className="w-full h-48 sm:h-64 lg:h-auto rounded-2xl shadow-2xl object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-comic font-bold">
                  Chapter 3 Available!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto text-center">
          <h3 className="font-kid text-3xl md:text-4xl text-foreground mb-12">
            Why Kids Love Our Educational Stories? 🎈
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-rainbow-blue/20">
              <div className="text-6xl mb-4" role="img" aria-label="Books emoji">📚</div>
              <h4 className="font-kid text-xl mb-3 text-foreground">Educational Content</h4>
              <p className="font-comic text-muted-foreground">
                Every story teaches important life lessons about friendship, honesty, kindness, and moral values that shape character!
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-rainbow-green/20">
              <div className="text-6xl mb-4" role="img" aria-label="Art palette emoji">🎨</div>
              <h4 className="font-kid text-xl mb-3 text-foreground">Interactive Learning</h4>
              <p className="font-comic text-muted-foreground">
                Beautiful illustrations, spelling games, comprehension questions, and interactive activities make reading engaging and fun!
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-rainbow-purple/20">
              <div className="text-6xl mb-4" role="img" aria-label="Heart emoji">❤️</div>
              <h4 className="font-kid text-xl mb-3 text-foreground">Child-Safe Environment</h4>
              <p className="font-comic text-muted-foreground">
                All our stories are carefully curated to be age-appropriate, positive, and completely safe for children of all ages!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;