import { Link } from "react-router-dom";
import { Clock, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LazyImage from "@/components/LazyImage";
import { Story } from "@/data/stories";

interface StoryCardProps {
  story: Story;
}

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <Link to={`/story/${story.id}`}>
      <Card className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border-2 border-border bg-gradient-to-br from-card to-secondary/30">
        <CardHeader className="p-0">
          <div className="relative overflow-hidden rounded-t-lg">
            <LazyImage 
              src={story.image} 
              alt={`${story.title} - Educational ${story.category.toLowerCase()} story for children ages ${story.ageGroup} teaching about ${story.moralLesson.toLowerCase()}`}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              width={400}
              height={200}
            />
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="bg-accent text-accent-foreground font-comic font-bold shadow-lg">
                {story.category}
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4">
          <h3 className="font-kid text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
            {story.title}
          </h3>
          <p className="text-muted-foreground font-comic text-sm leading-relaxed mb-3">
            {story.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 text-xs">
            <div className="flex items-center gap-1 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span className="font-comic">{story.ageGroup}</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="font-comic">{story.readingTime}</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="px-4 pb-4">
          <div className="w-full flex items-center justify-between">
            <span className="text-primary font-comic font-bold text-sm">
              Read Story
            </span>
            <BookOpen className="w-5 h-5 text-primary group-hover:animate-bounce" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default StoryCard;