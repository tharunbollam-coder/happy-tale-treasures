import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stories } from "@/data/stories";
import { ArrowLeft, Clock, Users, Lightbulb, Heart } from "lucide-react";

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const story = stories.find((s) => s.id === id);

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
        <Card className="mb-8">
          <CardHeader>
            <h2 className="font-kid text-2xl text-foreground flex items-center gap-2">
              📖 The Story
            </h2>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="font-comic text-foreground leading-relaxed mb-4 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Moral Lesson */}
        <Card className="mb-8 bg-gradient-to-br from-secondary/50 to-accent/30 border-2 border-accent/30">
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