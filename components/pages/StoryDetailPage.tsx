'use client'

import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Breadcrumbs from "@/components/Breadcrumbs"
import FeedbackDialog from "@/components/FeedbackDialog"
import { stories } from "@/data/stories"
import { ArrowLeft, Clock, Users, Lightbulb, Heart } from "lucide-react"

interface StoryDetailPageProps {
  storyId: string
}

export function StoryDetailPage({ storyId }: StoryDetailPageProps) {
  const story = stories.find((s) => s.id === storyId)
  const router = useRouter()

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4" role="img" aria-label="Sad face emoji">😢</div>
          <h1 className="font-kid text-3xl text-foreground mb-4">Story Not Found</h1>
          <p className="font-comic text-muted-foreground mb-6">
            Oops! We couldn't find that story. Let's go back and find another adventure!
          </p>
          <Link href="/stories">
            <Button className="font-comic font-bold" aria-label="Return to stories list">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'All Stories', href: '/stories' },
    { label: story.title, href: `/story/${story.id}` }
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Breadcrumbs items={breadcrumbItems} />
        
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/stories">
            <Button variant="outline" className="font-comic font-bold rounded-full hover:scale-105 transition-all duration-200" aria-label="Return to all stories">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Stories
            </Button>
          </Link>
        </div>

        {/* Story Header */}
        <Card className="mb-8 overflow-hidden border-4 border-rainbow-yellow/40 bg-gradient-to-br from-rainbow-red/10 via-rainbow-yellow/10 to-rainbow-blue/10 shadow-2xl hover:shadow-rainbow-purple/30 transition-all duration-500 hover:scale-105">
          <CardHeader className="p-0">
            <div className="relative">
              <Image 
                src={story.image} 
                alt={`${story.title} - Educational story illustration for children showing moral lesson about ${story.moralLesson.toLowerCase()}`}
                className="w-full h-64 md:h-96 object-cover"
                width={800}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-rainbow-yellow/20"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <Badge className="mb-2 bg-rainbow-purple/90 text-white font-comic font-bold text-xs px-3 py-1 rounded-full border-2 border-white/20">
                  {story.category}
                </Badge>
                <h1 className="font-kid text-3xl md:text-5xl mb-2 drop-shadow-2xl text-shadow-lg">
                  {story.title}
                </h1>
                <p className="font-comic text-lg opacity-95 drop-shadow-lg">
                  {story.summary}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Story Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-4 text-center border-4 border-rainbow-blue/40 bg-gradient-to-br from-rainbow-blue/10 to-rainbow-blue/20 hover:scale-105 transition-all duration-300">
            <Users className="w-8 h-8 text-rainbow-blue mx-auto mb-2" />
            <div className="font-comic font-bold text-sm text-muted-foreground">Age Group</div>
            <div className="font-kid text-lg text-foreground">{story.ageGroup}</div>
          </Card>
          <Card className="p-4 text-center border-4 border-rainbow-green/40 bg-gradient-to-br from-rainbow-green/10 to-rainbow-green/20 hover:scale-105 transition-all duration-300">
            <Clock className="w-8 h-8 text-rainbow-green mx-auto mb-2" />
            <div className="font-comic font-bold text-sm text-muted-foreground">Reading Time</div>
            <div className="font-kid text-lg text-foreground">{story.readingTime}</div>
          </Card>
          <Card className="p-4 text-center border-4 border-rainbow-purple/40 bg-gradient-to-br from-rainbow-purple/10 to-rainbow-purple/20 hover:scale-105 transition-all duration-300">
            <Heart className="w-8 h-8 text-rainbow-purple mx-auto mb-2" />
            <div className="font-comic font-bold text-sm text-muted-foreground">Category</div>
            <div className="font-kid text-lg text-foreground">{story.category}</div>
          </Card>
        </div>

        {/* Story Content */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="font-kid text-3xl text-foreground flex items-center justify-center gap-3 mb-4">
              📖 <span>Let's Read Together!</span> 📚
            </h2>
            <div className="flex justify-center gap-4">
              <div className="bg-rainbow-red/30 px-4 py-2 rounded-full font-comic text-sm border-2 border-rainbow-red/40">
                🎯 Follow along with the pictures!
              </div>
              <div className="bg-rainbow-blue/30 px-4 py-2 rounded-full font-comic text-sm border-2 border-rainbow-blue/40">
                🌟 Can you spot the lesson?
              </div>
            </div>
          </div>

          {story.content.map((section, index) => (
            <div key={index} className="space-y-8">
              {/* Large Image Section */}
              {section.image && (
                <div className="relative">
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center gap-2 bg-rainbow-yellow/30 px-6 py-3 rounded-full border-4 border-rainbow-yellow/50">
                      <span className="text-2xl">🎨</span>
                      <span className="font-kid text-xl text-rainbow-yellow font-bold drop-shadow-lg">
                        Scene {index + 1}
                      </span>
                      <span className="text-2xl">✨</span>
                    </div>
                  </div>
                  
                  <div className="relative rounded-3xl overflow-hidden border-4 border-rainbow-red/50 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-rainbow-purple/40">
                    <Image 
                      src={section.image} 
                      alt={`Educational story scene ${index + 1} from ${story.title}: ${section.text.substring(0, 100)}... - Teaching children about ${story.moralLesson.toLowerCase()}`}
                      className="w-full h-64 md:h-80 lg:h-96 object-cover"
                      width={800}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rainbow-purple/20 via-transparent to-rainbow-yellow/10 pointer-events-none"></div>
                    
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-rainbow-blue/95 rounded-full p-1 shadow-lg border-2 border-white/50">
                        <span className="text-xl">📖</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Text Section */}
              <Card className="bg-gradient-to-br from-rainbow-red/10 via-rainbow-yellow/10 to-rainbow-blue/10 border-4 border-dashed border-rainbow-purple/40 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-102">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {section.text.split('\n\n').map((paragraph, pIndex) => (
                      <div key={pIndex} className="relative">
                        <div className="absolute -left-6 top-0 text-3xl opacity-30">
                          {pIndex === 0 ? "📝" : pIndex % 2 === 0 ? "✨" : "🌟"}
                        </div>
                        <p className="font-comic text-foreground leading-relaxed text-lg md:text-xl pl-4 hover:pl-6 transition-all duration-300 hover:text-rainbow-purple">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <button className="bg-rainbow-yellow/40 hover:bg-rainbow-yellow/60 px-4 py-2 text-sm rounded-full border-2 border-rainbow-yellow/60 font-comic font-bold transition-all duration-300 hover:scale-110">
                      🔊 Read Aloud
                    </button>
                    <button className="bg-rainbow-purple/40 hover:bg-rainbow-purple/60 px-4 py-2 text-sm rounded-full border-2 border-rainbow-purple/60 font-comic font-bold transition-all duration-300 hover:scale-110">
                      💭 What happens next?
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Moral of the Story */}
        <Card className="mb-8 mt-12 bg-gradient-to-br from-rainbow-yellow/20 to-rainbow-green/20 border-4 border-rainbow-yellow/50 shadow-2xl hover:shadow-rainbow-green/40 transition-all duration-500 hover:scale-105">
          <CardHeader>
            <h2 className="font-kid text-2xl text-foreground flex items-center gap-2">
              <Lightbulb className="w-8 h-8 text-rainbow-yellow" />
              Moral of the Story ✨
            </h2>
          </CardHeader>
          <CardContent>
            <div className="bg-rainbow-yellow/30 p-4 rounded-xl border-2 border-rainbow-yellow/50">
              <p className="font-comic text-lg text-foreground leading-relaxed text-center font-bold">
                💡 {story.moralLesson} 🌟
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Word Helper Section */}
        {story.wordHelpers && story.wordHelpers.length > 0 && (
          <div className="mb-8 mt-12">
            <Card className="bg-gradient-to-br from-rainbow-purple/20 to-rainbow-pink/20 border-4 border-rainbow-purple/50 shadow-2xl hover:shadow-rainbow-pink/40 transition-all duration-500">
              <CardHeader>
                <div className="text-center">
                  <h2 className="font-kid text-3xl text-foreground flex items-center justify-center gap-2 mb-2">
                    🧠 Smart Words! 📚
                  </h2>
                  <div className="inline-flex items-center gap-2 bg-rainbow-purple/30 px-6 py-3 rounded-full border-4 border-rainbow-purple/50">
                    <span className="text-lg">✨</span>
                    <span className="font-comic font-bold text-base text-rainbow-purple">
                      Let's learn big words together!
                    </span>
                    <span className="text-lg">🌟</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {story.wordHelpers.map((wordHelper, index) => (
                    <div 
                      key={index} 
                      className="relative bg-white/80 p-6 rounded-2xl border-4 shadow-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                      style={{
                        borderColor: index % 3 === 0 ? 'hsl(var(--rainbow-red))' : 
                                   index % 3 === 1 ? 'hsl(var(--rainbow-blue))' : 
                                   'hsl(var(--rainbow-green))'
                      }}
                    >
                      <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                           style={{
                             backgroundColor: index % 3 === 0 ? 'hsl(var(--rainbow-red))' : 
                                            index % 3 === 1 ? 'hsl(var(--rainbow-blue))' : 
                                            'hsl(var(--rainbow-green))'
                           }}>
                        <span className="text-lg text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                      
                      <div className="text-center mb-4">
                        <div className="text-3xl mb-3">
                          {index % 3 === 0 ? '🎯' : index % 3 === 1 ? '🎪' : '🎨'}
                        </div>
                        <h3 className="font-kid text-2xl font-bold mb-2"
                            style={{
                              color: index % 3 === 0 ? 'hsl(var(--rainbow-red))' : 
                                     index % 3 === 1 ? 'hsl(var(--rainbow-blue))' : 
                                     'hsl(var(--rainbow-green))'
                            }}>
                          {wordHelper.word}
                        </h3>
                        
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border-2 border-gray-200">
                          <div className="text-lg mb-2 font-bold text-gray-700">
                            This means:
                          </div>
                          <p className="font-comic text-base text-gray-800 leading-relaxed">
                            {wordHelper.definition}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <button className="bg-gradient-to-r from-rainbow-yellow/60 to-rainbow-orange/60 hover:from-rainbow-yellow/80 hover:to-rainbow-orange/80 px-6 py-3 text-sm rounded-full border-3 border-rainbow-yellow/70 font-comic font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
                          <span className="mr-2">🎵</span>
                          Got it!
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reading Progress & Activities */}
        <div className="mb-8 mt-12 space-y-6">
          <Card className="bg-gradient-to-br from-rainbow-green/30 to-rainbow-blue/30 border-4 border-rainbow-green/50 shadow-2xl hover:shadow-rainbow-blue/40 transition-all duration-500">
            <CardHeader>
              <h2 className="font-kid text-2xl text-foreground flex items-center gap-2">
                🎯 <span>Reading Activities</span> 🎮
              </h2>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-rainbow-yellow/40 p-4 rounded-xl border-4 border-rainbow-yellow/60 hover:scale-105 transition-all duration-300">
                    <h3 className="font-comic font-bold text-rainbow-yellow mb-2 flex items-center gap-2">
                      📚 Reading Challenge
                    </h3>
                    <div className="space-y-2">
                      <Link href={`/spelling-game/${storyId}`}>
                        <button className="w-full bg-rainbow-yellow/50 hover:bg-rainbow-yellow/70 px-4 py-3 text-sm rounded-lg border-2 border-rainbow-yellow/70 font-comic font-bold transition-all duration-300 hover:scale-105">
                          🔤 Spell the Characters' Names
                        </button>
                      </Link>
                      <button className="w-full bg-rainbow-blue/50 hover:bg-rainbow-blue/70 px-4 py-3 text-sm rounded-lg border-2 border-rainbow-blue/70 font-comic font-bold transition-all duration-300 hover:scale-105">
                        📖 Read Aloud Practice
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-rainbow-purple/40 p-4 rounded-xl border-4 border-rainbow-purple/60 hover:scale-105 transition-all duration-300">
                    <h3 className="font-comic font-bold text-rainbow-purple mb-2 flex items-center gap-2">
                      🧠 Think & Learn
                    </h3>
                    <div className="space-y-2">
                      <Link href={`/story-questions/${storyId}`}>
                        <button className="w-full bg-rainbow-purple/50 hover:bg-rainbow-purple/70 px-4 py-3 text-sm rounded-lg border-2 border-rainbow-purple/70 font-comic font-bold transition-all duration-300 hover:scale-105">
                          ❓ Story Questions
                        </button>
                      </Link>
                      <button className="w-full bg-rainbow-green/50 hover:bg-rainbow-green/70 px-4 py-3 text-sm rounded-lg border-2 border-rainbow-green/70 font-comic font-bold transition-all duration-300 hover:scale-105">
                        🎨 Draw Your Favorite Scene
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Feedback Section */}
        <div className="mb-8">
          <Card className="bg-gradient-to-br from-rainbow-purple/30 to-rainbow-blue/30 border-4 border-rainbow-purple/50 shadow-2xl hover:shadow-rainbow-blue/40 transition-all duration-500">
            <CardContent className="p-6 text-center">
              <h3 className="font-kid text-xl mb-3 text-foreground flex items-center justify-center gap-2">
                🌟 Did you enjoy this story? 💭
              </h3>
              <p className="font-comic text-muted-foreground mb-4 text-sm">
                Your feedback helps us create even better stories for kids like you!
              </p>
              <FeedbackDialog storyTitle={story.title} />
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/stories">
            <Button 
              variant="outline" 
              size="lg"
              className="font-comic font-bold rounded-full w-full sm:w-auto border-4 border-rainbow-blue/50 bg-rainbow-blue/20 hover:bg-rainbow-blue/40 hover:scale-105 transition-all duration-300"
              aria-label="Browse more educational stories for children"
            >
              📚 Read Another Story
            </Button>
          </Link>
          <Link href="/">
            <Button 
              size="lg"
              className="font-comic font-bold rounded-full w-full sm:w-auto bg-rainbow-green/60 hover:bg-rainbow-green/80 hover:scale-105 transition-all duration-300"
              aria-label="Return to KidsStories homepage"
            >
              🏠 Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}