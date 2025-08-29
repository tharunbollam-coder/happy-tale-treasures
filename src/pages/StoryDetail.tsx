import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stories } from "@/data/stories";
import { ArrowLeft, Clock, Users, Lightbulb, Heart } from "lucide-react";

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find((s) => s.id === id);
  const navigate = useNavigate();

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h1 className="font-kid text-3xl text-foreground mb-4">Story Not Found</h1>
          <p className="font-comic text-muted-foreground mb-6">
            Oops! We couldn't find that story. Let's go back and find another adventure!
          </p>
          <Link to="/stories">
            <Button className="font-comic font-bold">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/stories">
            <Button variant="outline" className="font-comic font-bold rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>

        {/* Story Header */}
        <Card className="mb-8 overflow-hidden border-2 border-border bg-gradient-to-br from-card to-secondary/20">
          <CardHeader className="p-0">
            <div className="relative">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Badge className="mb-4 bg-accent text-accent-foreground font-comic font-bold">
                  {story.category}
                </Badge>
                <h1 className="font-kid text-3xl md:text-5xl mb-2 drop-shadow-lg">
                  {story.title}
                </h1>
                <p className="font-comic text-lg opacity-90 drop-shadow">
                  {story.summary}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Story Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 text-center border-rainbow-blue/20">
            <Users className="w-8 h-8 text-rainbow-blue mx-auto mb-2" />
            <div className="font-comic font-bold text-sm text-muted-foreground">Age Group</div>
            <div className="font-kid text-lg text-foreground">{story.ageGroup}</div>
          </Card>
          <Card className="p-4 text-center border-rainbow-green/20">
            <Clock className="w-8 h-8 text-rainbow-green mx-auto mb-2" />
            <div className="font-comic font-bold text-sm text-muted-foreground">Reading Time</div>
            <div className="font-kid text-lg text-foreground">{story.readingTime}</div>
          </Card>
          <Card className="p-4 text-center border-rainbow-purple/20">
            <Heart className="w-8 h-8 text-rainbow-purple mx-auto mb-2" />
            <div className="font-comic font-bold text-sm text-muted-foreground">Category</div>
            <div className="font-kid text-lg text-foreground">{story.category}</div>
          </Card>
        </div>

        {/* Story Content */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="font-kid text-3xl text-foreground flex items-center justify-center gap-3 mb-4">
              📖 <span className="animate-pulse">Let's Read Together!</span> 📚
            </h2>
            <div className="flex justify-center gap-4">
              <div className="bg-rainbow-red/20 px-4 py-2 rounded-full font-comic text-sm">
                🎯 Follow along with the pictures!
              </div>
              <div className="bg-rainbow-blue/20 px-4 py-2 rounded-full font-comic text-sm">
                🌟 Can you spot the lesson?
              </div>
            </div>
          </div>

          {story.content.map((section, index) => (
            <div key={index} className="space-y-8">
              {/* Large Image Section - More Prominent */}
              {section.image && (
                <div className="relative">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full border-2 border-accent/30">
                      <span className="text-2xl">🎨</span>
                      <span className="font-kid text-xl text-accent font-bold">
                        Scene {index + 1}
                      </span>
                      <span className="text-2xl">✨</span>
                    </div>
                  </div>
                  
                  <div className="relative rounded-3xl overflow-hidden border-4 border-gradient-to-r from-rainbow-red/40 via-rainbow-yellow/40 to-rainbow-blue/40 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-rainbow-purple/30">
                    <img 
                      src={section.image} 
                      alt={`Story scene ${index + 1}: ${section.text.substring(0, 100)}...`}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Fun floating elements */}
                    <div className="absolute top-4 right-4 animate-bounce">
                      <div className="bg-white/90 rounded-full p-2 shadow-lg">
                        <span className="text-2xl">🌟</span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 animate-pulse">
                      <div className="bg-white/90 rounded-full p-2 shadow-lg">
                        <span className="text-xl">📖</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Text Section - More Engaging */}
              <Card className="bg-gradient-to-br from-card/50 to-secondary/20 border-2 border-dashed border-accent/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {section.text.split('\n\n').map((paragraph, pIndex) => (
                      <div key={pIndex} className="relative">
                        <div className="absolute -left-6 top-0 text-3xl opacity-20">
                          {pIndex === 0 ? "📝" : "✨"}
                        </div>
                        <p className="font-comic text-foreground leading-relaxed text-lg md:text-xl pl-4 hover:pl-6 transition-all duration-200">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Interactive elements for engagement */}
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button className="bg-rainbow-yellow/30 hover:bg-rainbow-yellow/50 px-4 py-2 rounded-full border-2 border-rainbow-yellow/50 font-comic font-bold text-sm transition-all duration-200 hover:scale-105">
                      🔊 Read Aloud
                    </button>
                    <button className="bg-rainbow-purple/30 hover:bg-rainbow-purple/50 px-4 py-2 rounded-full border-2 border-rainbow-purple/50 font-comic font-bold text-sm transition-all duration-200 hover:scale-105">
                      💭 What happens next?
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Reading Progress & Activities */}
        <div className="mb-8 mt-12 space-y-6">
          <Card className="bg-gradient-to-br from-rainbow-green/20 to-rainbow-blue/20 border-2 border-rainbow-green/30">
            <CardHeader>
              <h2 className="font-kid text-2xl text-foreground flex items-center gap-2">
                🎯 <span className="animate-pulse">Reading Activities</span>
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white/50 p-4 rounded-xl border-2 border-rainbow-yellow/40">
                    <h3 className="font-comic font-bold text-rainbow-yellow mb-2 flex items-center gap-2">
                      📚 Reading Challenge
                    </h3>
                    <div className="space-y-2">
                      <button 
                        onClick={() => navigate(`/spelling-game/${id}`)}
                        className="w-full bg-rainbow-yellow/30 hover:bg-rainbow-yellow/50 px-4 py-3 rounded-lg border-2 border-rainbow-yellow/50 font-comic font-bold text-sm transition-all duration-200 hover:scale-105"
                      >
                        🔤 Spell the Characters' Names
                      </button>
                      <button className="w-full bg-rainbow-blue/30 hover:bg-rainbow-blue/50 px-4 py-3 rounded-lg border-2 border-rainbow-blue/50 font-comic font-bold text-sm transition-all duration-200 hover:scale-105">
                        📖 Read Aloud Practice
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white/50 p-4 rounded-xl border-2 border-rainbow-purple/40">
                    <h3 className="font-comic font-bold text-rainbow-purple mb-2 flex items-center gap-2">
                      🧠 Think & Learn
                    </h3>
                    <div className="space-y-2">
                      <button 
                        onClick={() => navigate(`/story-questions/${id}`)}
                        className="w-full bg-rainbow-purple/30 hover:bg-rainbow-purple/50 px-4 py-3 rounded-lg border-2 border-rainbow-purple/50 font-comic font-bold text-sm transition-all duration-200 hover:scale-105"
                      >
                        ❓ Story Questions
                      </button>
                      <button className="w-full bg-rainbow-green/30 hover:bg-rainbow-green/50 px-4 py-3 rounded-lg border-2 border-rainbow-green/50 font-comic font-bold text-sm transition-all duration-200 hover:scale-105">
                        🎨 Draw Your Favorite Scene
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-rainbow-red/20 via-rainbow-yellow/20 to-rainbow-green/20 p-4 rounded-xl border-2 border-dashed border-accent/40">
                <div className="text-center">
                  <h3 className="font-kid text-xl text-foreground mb-3 flex items-center justify-center gap-2">
                    🌟 Reading Level: Perfect for You! 🌟
                  </h3>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <div className="bg-white/70 px-4 py-2 rounded-full border-2 border-rainbow-blue/40">
                      <span className="font-comic font-bold text-sm">📏 {story.readingTime}</span>
                    </div>
                    <div className="bg-white/70 px-4 py-2 rounded-full border-2 border-rainbow-green/40">
                      <span className="font-comic font-bold text-sm">👥 {story.ageGroup}</span>
                    </div>
                    <div className="bg-white/70 px-4 py-2 rounded-full border-2 border-rainbow-purple/40">
                      <span className="font-comic font-bold text-sm">✨ Safe & Educational</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Moral Lesson */}
        <Card className="mb-8 mt-12 bg-gradient-to-br from-secondary/50 to-accent/30 border-2 border-accent/30">
          <CardHeader>
            <h2 className="font-kid text-2xl text-foreground flex items-center gap-2">
              <Lightbulb className="w-8 h-8 text-accent" />
              What We Learn
            </h2>
          </CardHeader>
          <CardContent>
            <p className="font-comic text-lg text-foreground leading-relaxed">
              ✨ {story.moralLesson}
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/stories">
            <Button variant="outline" size="lg" className="font-comic font-bold rounded-full w-full sm:w-auto">
              📚 Read Another Story
            </Button>
          </Link>
          <Link to="/">
            <Button size="lg" className="font-comic font-bold rounded-full w-full sm:w-auto">
              🏠 Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;