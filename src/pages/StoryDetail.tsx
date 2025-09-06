import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyImage from "@/components/LazyImage";
import FeedbackDialog from "@/components/FeedbackDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { stories } from "@/data/stories";
import { ArrowLeft, Clock, Users, Lightbulb, Heart } from "lucide-react";
import { generateStorySchema, generateStoryMetaDescription, generateStoryKeywords, generateBreadcrumbSchema } from "@/utils/seo";

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find((s) => s.id === id);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO 
          title="Story Not Found | KidsStories"
          description="The requested story could not be found. Explore our collection of educational stories for children."
        />
        <div className="text-center">
          <div className="text-6xl mb-4" role="img" aria-label="Sad face emoji">😢</div>
          <h1 className="font-kid text-3xl text-foreground mb-4">Story Not Found</h1>
          <p className="font-comic text-muted-foreground mb-6">
            Oops! We couldn't find that story. Let's go back and find another adventure!
          </p>
          <Link to="/stories">
            <Button className="font-comic font-bold" aria-label="Return to stories list">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Generate SEO data for this specific story
  const storySchema = generateStorySchema(story);
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'All Stories', href: '/stories' },
    { label: story.title, href: `/story/${story.id}` }
  ];
  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbItems.map(item => ({ name: item.label, url: `${window.location.origin}${item.href}` }))
  );
  const combinedSchema = [storySchema, breadcrumbSchema];

  return (
    <div className={`min-h-screen ${isMobile ? 'py-2 px-2' : 'py-8 px-4'}`}>
      <SEO 
        title={`${story.title} - Educational Story for Kids Ages ${story.ageGroup} | KidsStories`}
        description={generateStoryMetaDescription(story)}
        keywords={generateStoryKeywords(story)}
        image={story.image}
        url={`/story/${story.id}`}
        type="article"
        schemaData={combinedSchema}
      />
      
      <div className={`container mx-auto max-w-4xl ${isMobile ? 'px-1' : ''}`}>
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Back Button */}
        <div className={`${isMobile ? 'mb-3' : 'mb-6'}`}>
          <Link to="/stories">
            <Button variant="outline" className="font-comic font-bold rounded-full hover:scale-105 transition-all duration-200" aria-label="Return to all stories">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>

        {/* Story Header */}
        <Card className={`${isMobile ? 'mb-4' : 'mb-8'} overflow-hidden border-4 border-rainbow-yellow/40 bg-gradient-to-br from-rainbow-red/10 via-rainbow-yellow/10 to-rainbow-blue/10 shadow-2xl hover:shadow-rainbow-purple/30 transition-all duration-500 hover:scale-105`}>
          <CardHeader className="p-0">
            <div className="relative">
              <LazyImage 
                src={story.image} 
                alt={`${story.title} - Educational story illustration for children showing moral lesson about ${story.moralLesson.toLowerCase()}`}
                className={`w-full ${isMobile ? 'h-48' : 'h-64 md:h-96'} object-cover`}
                width={800}
                height={400}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-rainbow-yellow/20"></div>
              
              
              <div className={`absolute ${isMobile ? 'bottom-3 left-3 right-3' : 'bottom-6 left-6 right-6'} text-white`}>
                <Badge className="mb-2 bg-rainbow-purple/90 text-white font-comic font-bold text-xs px-3 py-1 rounded-full border-2 border-white/20">
                  {story.category}
                </Badge>
                <h1 className={`font-kid ${isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'} mb-2 drop-shadow-2xl text-shadow-lg`}>
                  {story.title}
                </h1>
                <p className={`font-comic ${isMobile ? 'text-sm' : 'text-lg'} opacity-95 drop-shadow-lg`}>
                  {story.summary}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Story Info */}
        <div className={`grid grid-cols-1 md:grid-cols-3 ${isMobile ? 'gap-2 mb-4' : 'gap-4 mb-8'}`}>
          <Card className={`${isMobile ? 'p-2' : 'p-4'} text-center border-4 border-rainbow-blue/40 bg-gradient-to-br from-rainbow-blue/10 to-rainbow-blue/20 hover:scale-105 transition-all duration-300`}>
            <Users className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-rainbow-blue mx-auto mb-2`} />
            <div className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground`}>Age Group</div>
            <div className={`font-kid ${isMobile ? 'text-base' : 'text-lg'} text-foreground`}>{story.ageGroup}</div>
          </Card>
          <Card className={`${isMobile ? 'p-2' : 'p-4'} text-center border-4 border-rainbow-green/40 bg-gradient-to-br from-rainbow-green/10 to-rainbow-green/20 hover:scale-105 transition-all duration-300`}>
            <Clock className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-rainbow-green mx-auto mb-2`} />
            <div className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground`}>Reading Time</div>
            <div className={`font-kid ${isMobile ? 'text-base' : 'text-lg'} text-foreground`}>{story.readingTime}</div>
          </Card>
          <Card className={`${isMobile ? 'p-2' : 'p-4'} text-center border-4 border-rainbow-purple/40 bg-gradient-to-br from-rainbow-purple/10 to-rainbow-purple/20 hover:scale-105 transition-all duration-300`}>
            <Heart className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-rainbow-purple mx-auto mb-2`} />
            <div className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-muted-foreground`}>Category</div>
            <div className={`font-kid ${isMobile ? 'text-base' : 'text-lg'} text-foreground`}>{story.category}</div>
          </Card>
        </div>

        {/* Story Content */}
        <div className={`${isMobile ? 'space-y-4' : 'space-y-8'}`}>
          <div className={`text-center ${isMobile ? 'mb-4' : 'mb-8'}`}>
            <h2 className={`font-kid ${isMobile ? 'text-xl' : 'text-3xl'} text-foreground flex items-center justify-center gap-3 mb-4`}>
              📖 <span>Let's Read Together!</span> 📚
            </h2>
            <div className={`flex ${isMobile ? 'flex-col gap-2' : 'justify-center gap-4'}`}>
              <div className={`bg-rainbow-red/30 ${isMobile ? 'px-3 py-1' : 'px-4 py-2'} rounded-full font-comic ${isMobile ? 'text-xs' : 'text-sm'} border-2 border-rainbow-red/40`}>
                🎯 Follow along with the pictures!
              </div>
              <div className={`bg-rainbow-blue/30 ${isMobile ? 'px-3 py-1' : 'px-4 py-2'} rounded-full font-comic ${isMobile ? 'text-xs' : 'text-sm'} border-2 border-rainbow-blue/40`}>
                🌟 Can you spot the lesson?
              </div>
            </div>
          </div>

          {story.content.map((section, index) => (
            <div key={index} className={`${isMobile ? 'space-y-4' : 'space-y-8'}`}>
              {/* Large Image Section - More Prominent */}
              {section.image && (
                <div className="relative">
                  <div className={`text-center ${isMobile ? 'mb-2' : 'mb-4'}`}>
                    <div className={`inline-flex items-center gap-2 bg-rainbow-yellow/30 ${isMobile ? 'px-4 py-2' : 'px-6 py-3'} rounded-full border-4 border-rainbow-yellow/50`}>
                      <span className={`${isMobile ? 'text-lg' : 'text-2xl'}`}>🎨</span>
                      <span className={`font-kid ${isMobile ? 'text-base' : 'text-xl'} text-rainbow-yellow font-bold drop-shadow-lg`}>
                        Scene {index + 1}
                      </span>
                      <span className={`${isMobile ? 'text-lg' : 'text-2xl'}`}>✨</span>
                    </div>
                  </div>
                  
                  <div className={`relative ${isMobile ? 'rounded-2xl' : 'rounded-3xl'} overflow-hidden border-4 border-rainbow-red/50 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-rainbow-purple/40`}>
                    <LazyImage 
                      src={section.image} 
                      alt={`Educational story scene ${index + 1} from ${story.title}: ${section.text.substring(0, 100)}... - Teaching children about ${story.moralLesson.toLowerCase()}`}
                      className={`w-full ${isMobile ? 'h-48' : 'h-64 md:h-80 lg:h-96'} object-cover`}
                      width={800}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rainbow-purple/20 via-transparent to-rainbow-yellow/10 pointer-events-none"></div>
                    
                    {/* Keep only book icon */}
                    <div className={`absolute ${isMobile ? 'bottom-2 left-2' : 'bottom-4 left-4'}`}>
                      <div className="bg-rainbow-blue/95 rounded-full p-1 shadow-lg border-2 border-white/50">
                        <span className={`${isMobile ? 'text-base' : 'text-xl'}`}>📖</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Text Section - More Engaging */}
              <Card className={`bg-gradient-to-br from-rainbow-red/10 via-rainbow-yellow/10 to-rainbow-blue/10 border-4 border-dashed border-rainbow-purple/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102`}>
                <CardContent className={`${isMobile ? 'p-4' : 'p-8'}`}>
                  <div className={`${isMobile ? 'space-y-3' : 'space-y-6'}`}>
                    {section.text.split('\n\n').map((paragraph, pIndex) => (
                      <div key={pIndex} className="relative">
                        <div className={`absolute ${isMobile ? '-left-4 top-0 text-xl' : '-left-6 top-0 text-3xl'} opacity-30`}>
                          {pIndex === 0 ? "📝" : pIndex % 2 === 0 ? "✨" : "🌟"}
                        </div>
                        <p className={`font-comic text-foreground leading-relaxed ${isMobile ? 'text-base pl-3' : 'text-lg md:text-xl pl-4'} hover:pl-6 transition-all duration-300 hover:text-rainbow-purple`}>
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Interactive elements for engagement */}
                  <div className={`${isMobile ? 'mt-4' : 'mt-6'} flex flex-wrap justify-center gap-2`}>
                    <button className={`bg-rainbow-yellow/40 hover:bg-rainbow-yellow/60 ${isMobile ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'} rounded-full border-2 border-rainbow-yellow/60 font-comic font-bold transition-all duration-300 hover:scale-110`}>
                      🔊 Read Aloud
                    </button>
                    <button className={`bg-rainbow-purple/40 hover:bg-rainbow-purple/60 ${isMobile ? 'px-3 py-1 text-xs' : 'px-4 py-2 text-sm'} rounded-full border-2 border-rainbow-purple/60 font-comic font-bold transition-all duration-300 hover:scale-110`}>
                      💭 What happens next?
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Word Helper Section */}
        {story.wordHelpers && story.wordHelpers.length > 0 && (
          <div className={`${isMobile ? 'mb-4 mt-6' : 'mb-8 mt-12'}`}>
            <Card className="bg-gradient-to-br from-rainbow-purple/20 to-rainbow-pink/20 border-4 border-rainbow-purple/50 shadow-2xl hover:shadow-rainbow-pink/40 transition-all duration-500">
              <CardHeader className={isMobile ? 'p-3' : ''}>
                <div className="text-center">
                  <h2 className={`font-kid ${isMobile ? 'text-xl' : 'text-3xl'} text-foreground flex items-center justify-center gap-2 mb-2`}>
                    🧠 Smart Words! 📚
                  </h2>
                  <div className={`inline-flex items-center gap-2 bg-rainbow-purple/30 ${isMobile ? 'px-4 py-2' : 'px-6 py-3'} rounded-full border-4 border-rainbow-purple/50`}>
                    <span className={`${isMobile ? 'text-base' : 'text-lg'}`}>✨</span>
                    <span className={`font-comic font-bold ${isMobile ? 'text-sm' : 'text-base'} text-rainbow-purple`}>
                      Let's learn big words together!
                    </span>
                    <span className={`${isMobile ? 'text-base' : 'text-lg'}`}>🌟</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className={isMobile ? 'p-3' : ''}>
                <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : 'md:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
                  {story.wordHelpers.map((wordHelper, index) => (
                    <div 
                      key={index} 
                      className={`relative bg-white/80 ${isMobile ? 'p-4' : 'p-6'} rounded-2xl border-4 border-rainbow-colors shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                      style={{
                        borderColor: index % 3 === 0 ? 'hsl(var(--rainbow-red))' : 
                                   index % 3 === 1 ? 'hsl(var(--rainbow-blue))' : 
                                   'hsl(var(--rainbow-green))'
                      }}
                    >
                      {/* Decorative corner */}
                      <div className={`absolute -top-3 -right-3 ${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full flex items-center justify-center shadow-lg`}
                           style={{
                             backgroundColor: index % 3 === 0 ? 'hsl(var(--rainbow-red))' : 
                                            index % 3 === 1 ? 'hsl(var(--rainbow-blue))' : 
                                            'hsl(var(--rainbow-green))'
                           }}>
                        <span className={`${isMobile ? 'text-sm' : 'text-lg'} text-white font-bold`}>
                          {index + 1}
                        </span>
                      </div>
                      
                      {/* Word */}
                      <div className="text-center mb-4">
                        <div className={`${isMobile ? 'text-2xl mb-2' : 'text-3xl mb-3'}`}>
                          {index % 3 === 0 ? '🎯' : index % 3 === 1 ? '🎪' : '🎨'}
                        </div>
                        <h3 className={`font-kid ${isMobile ? 'text-lg' : 'text-2xl'} font-bold mb-2`}
                            style={{
                              color: index % 3 === 0 ? 'hsl(var(--rainbow-red))' : 
                                     index % 3 === 1 ? 'hsl(var(--rainbow-blue))' : 
                                     'hsl(var(--rainbow-green))'
                            }}>
                          {wordHelper.word}
                        </h3>
                        
                        {/* Simple meaning */}
                        <div className={`bg-gradient-to-br from-gray-50 to-gray-100 ${isMobile ? 'p-3' : 'p-4'} rounded-xl border-2 border-gray-200`}>
                          <div className={`${isMobile ? 'text-base mb-1' : 'text-lg mb-2'} font-bold text-gray-700`}>
                            This means:
                          </div>
                          <p className={`font-comic ${isMobile ? 'text-sm' : 'text-base'} text-gray-800 leading-relaxed`}>
                            {wordHelper.definition}
                          </p>
                        </div>
                      </div>
                      
                      {/* Fun interaction */}
                      <div className="text-center">
                        <button className={`bg-gradient-to-r from-rainbow-yellow/60 to-rainbow-orange/60 hover:from-rainbow-yellow/80 hover:to-rainbow-orange/80 ${isMobile ? 'px-4 py-2 text-xs' : 'px-6 py-3 text-sm'} rounded-full border-3 border-rainbow-yellow/70 font-comic font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl`}>
                          <span className={isMobile ? 'mr-1' : 'mr-2'}>🎵</span>
                          Got it!
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Encouragement section */}
                <div className={`${isMobile ? 'mt-6' : 'mt-8'} text-center`}>
                  <div className={`bg-gradient-to-r from-rainbow-purple/30 via-rainbow-pink/30 to-rainbow-purple/30 ${isMobile ? 'p-4' : 'p-6'} rounded-2xl border-4 border-dashed border-rainbow-purple/50`}>
                    <div className={`${isMobile ? 'text-3xl mb-2' : 'text-4xl mb-3'}`}>🏆</div>
                    <h3 className={`font-kid ${isMobile ? 'text-lg mb-2' : 'text-2xl mb-3'} text-foreground`}>
                      Wow! You're learning so many new words!
                    </h3>
                    <p className={`font-comic text-muted-foreground ${isMobile ? 'text-sm mb-3' : 'text-base mb-4'}`}>
                      Try to use these words when you talk today. You're getting smarter!
                    </p>
                    <div className={`flex justify-center ${isMobile ? 'gap-2' : 'gap-4'} flex-wrap`}>
                      <div className={`bg-rainbow-red/60 ${isMobile ? 'px-3 py-1' : 'px-4 py-2'} rounded-full border-2 border-rainbow-red/70`}>
                        <span className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-white`}>📖 Smart Reader</span>
                      </div>
                      <div className={`bg-rainbow-blue/60 ${isMobile ? 'px-3 py-1' : 'px-4 py-2'} rounded-full border-2 border-rainbow-blue/70`}>
                        <span className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-white`}>🧠 Word Explorer</span>
                      </div>
                      <div className={`bg-rainbow-green/60 ${isMobile ? 'px-3 py-1' : 'px-4 py-2'} rounded-full border-2 border-rainbow-green/70`}>
                        <span className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-white`}>⭐ Learning Star</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reading Progress & Activities */}
        <div className={`${isMobile ? 'mb-4 mt-6' : 'mb-8 mt-12'} space-y-6`}>
          <Card className="bg-gradient-to-br from-rainbow-green/30 to-rainbow-blue/30 border-4 border-rainbow-green/50 shadow-2xl hover:shadow-rainbow-blue/40 transition-all duration-500">
            <CardHeader className={isMobile ? 'p-3' : ''}>
              <h2 className={`font-kid ${isMobile ? 'text-lg' : 'text-2xl'} text-foreground flex items-center gap-2`}>
                🎯 <span>Reading Activities</span> 🎮
              </h2>
            </CardHeader>
            <CardContent className={isMobile ? 'p-3' : ''}>
              <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-4'}`}>
                <div className="space-y-3">
                  <div className={`bg-rainbow-yellow/40 ${isMobile ? 'p-3' : 'p-4'} rounded-xl border-4 border-rainbow-yellow/60 hover:scale-105 transition-all duration-300`}>
                    <h3 className={`font-comic font-bold text-rainbow-yellow ${isMobile ? 'mb-1 text-sm' : 'mb-2'} flex items-center gap-2`}>
                      📚 Reading Challenge
                    </h3>
                    <div className="space-y-2">
                      <button 
                        onClick={() => navigate(`/spelling-game/${id}`)}
                        className={`w-full bg-rainbow-yellow/50 hover:bg-rainbow-yellow/70 ${isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'} rounded-lg border-2 border-rainbow-yellow/70 font-comic font-bold transition-all duration-300 hover:scale-105`}
                      >
                        🔤 Spell the Characters' Names
                      </button>
                      <button className={`w-full bg-rainbow-blue/50 hover:bg-rainbow-blue/70 ${isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'} rounded-lg border-2 border-rainbow-blue/70 font-comic font-bold transition-all duration-300 hover:scale-105`}>
                        📖 Read Aloud Practice
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className={`bg-rainbow-purple/40 ${isMobile ? 'p-3' : 'p-4'} rounded-xl border-4 border-rainbow-purple/60 hover:scale-105 transition-all duration-300`}>
                    <h3 className={`font-comic font-bold text-rainbow-purple ${isMobile ? 'mb-1 text-sm' : 'mb-2'} flex items-center gap-2`}>
                      🧠 Think & Learn
                    </h3>
                    <div className="space-y-2">
                      <button 
                        onClick={() => navigate(`/story-questions/${id}`)}
                        className={`w-full bg-rainbow-purple/50 hover:bg-rainbow-purple/70 ${isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'} rounded-lg border-2 border-rainbow-purple/70 font-comic font-bold transition-all duration-300 hover:scale-105`}
                      >
                        ❓ Story Questions
                      </button>
                      <button className={`w-full bg-rainbow-green/50 hover:bg-rainbow-green/70 ${isMobile ? 'px-3 py-2 text-xs' : 'px-4 py-3 text-sm'} rounded-lg border-2 border-rainbow-green/70 font-comic font-bold transition-all duration-300 hover:scale-105`}>
                        🎨 Draw Your Favorite Scene
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`${isMobile ? 'mt-4' : 'mt-6'} bg-gradient-to-r from-rainbow-red/30 via-rainbow-yellow/30 to-rainbow-green/30 ${isMobile ? 'p-3' : 'p-4'} rounded-xl border-4 border-dashed border-rainbow-blue/50`}>
                <div className="text-center">
                  <h3 className={`font-kid ${isMobile ? 'text-base mb-2' : 'text-xl mb-3'} text-foreground flex items-center justify-center gap-2`}>
                    🌟 Reading Level: Perfect for You! 🌟
                  </h3>
                  <div className={`flex justify-center ${isMobile ? 'gap-2 flex-wrap' : 'gap-4 flex-wrap'}`}>
                    <div className={`bg-rainbow-blue/60 ${isMobile ? 'px-2 py-1' : 'px-4 py-2'} rounded-full border-2 border-rainbow-blue/70`}>
                      <span className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-white`}>📏 {story.readingTime}</span>
                    </div>
                    <div className={`bg-rainbow-green/60 ${isMobile ? 'px-2 py-1' : 'px-4 py-2'} rounded-full border-2 border-rainbow-green/70`}>
                      <span className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-white`}>👥 {story.ageGroup}</span>
                    </div>
                    <div className={`bg-rainbow-purple/60 ${isMobile ? 'px-2 py-1' : 'px-4 py-2'} rounded-full border-2 border-rainbow-purple/70`}>
                      <span className={`font-comic font-bold ${isMobile ? 'text-xs' : 'text-sm'} text-white`}>✨ Safe & Educational</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Moral Lesson */}
        <Card className={`${isMobile ? 'mb-4 mt-6' : 'mb-8 mt-12'} bg-gradient-to-br from-rainbow-yellow/20 to-rainbow-green/20 border-4 border-rainbow-yellow/50 shadow-2xl hover:shadow-rainbow-green/40 transition-all duration-500 hover:scale-105`}>
          <CardHeader className={isMobile ? 'p-3' : ''}>
            <h2 className={`font-kid ${isMobile ? 'text-lg' : 'text-2xl'} text-foreground flex items-center gap-2`}>
              <Lightbulb className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-rainbow-yellow`} />
              What We Learn ✨
            </h2>
          </CardHeader>
          <CardContent className={isMobile ? 'p-3' : ''}>
            <div className="bg-rainbow-yellow/30 p-4 rounded-xl border-2 border-rainbow-yellow/50">
              <p className={`font-comic ${isMobile ? 'text-base' : 'text-lg'} text-foreground leading-relaxed text-center font-bold`}>
                💡 {story.moralLesson} 🌟
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <div className={isMobile ? 'mb-4' : 'mb-8'}>
          <Card className="bg-gradient-to-br from-rainbow-purple/30 to-rainbow-blue/30 border-4 border-rainbow-purple/50 shadow-2xl hover:shadow-rainbow-blue/40 transition-all duration-500">
            <CardContent className={`${isMobile ? 'p-4' : 'p-6'} text-center`}>
              <h3 className={`font-kid ${isMobile ? 'text-base mb-2' : 'text-xl mb-3'} text-foreground flex items-center justify-center gap-2`}>
                🌟 Did you enjoy this story? 💭
              </h3>
              <p className={`font-comic text-muted-foreground ${isMobile ? 'mb-3 text-xs' : 'mb-4 text-sm'}`}>
                Your feedback helps us create even better stories for kids like you!
              </p>
              <FeedbackDialog storyTitle={story.title} />
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className={`flex ${isMobile ? 'flex-col gap-2' : 'flex-col sm:flex-row gap-4'} justify-center`}>
          <Link to="/stories">
            <Button 
              variant="outline" 
              size={isMobile ? "default" : "lg"}
              className="font-comic font-bold rounded-full w-full sm:w-auto border-4 border-rainbow-blue/50 bg-rainbow-blue/20 hover:bg-rainbow-blue/40 hover:scale-105 transition-all duration-300"
              aria-label="Browse more educational stories for children"
            >
              📚 Read Another Story
            </Button>
          </Link>
          <Link to="/">
            <Button 
              size={isMobile ? "default" : "lg"}
              className="font-comic font-bold rounded-full w-full sm:w-auto bg-rainbow-green/60 hover:bg-rainbow-green/80 hover:scale-105 transition-all duration-300"
              aria-label="Return to KidsStories homepage"
            >
              🏠 Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryDetail;