import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FeedbackDialogProps {
  storyTitle: string;
}

const FeedbackDialog = ({ storyTitle }: FeedbackDialogProps) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the feedback to your backend
    console.log({
      story: storyTitle,
      rating,
      feedback,
      timestamp: new Date().toISOString()
    });

    toast({
      title: "Thank you for your feedback! 🌟",
      description: "Your review helps us create better stories for kids.",
    });

    // Reset form and close dialog
    setRating(0);
    setFeedback("");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="font-comic font-bold rounded-full w-full sm:w-auto bg-gradient-to-r from-rainbow-purple/80 to-rainbow-blue/80 hover:from-rainbow-purple hover:to-rainbow-blue border-2 border-rainbow-purple/50"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          💬 Share Your Thoughts
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-kid text-2xl text-center flex items-center justify-center gap-2">
            🌟 How did you like this story? 📚
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Story Title */}
          <div className="text-center">
            <p className="font-comic text-sm text-muted-foreground mb-4">
              "{storyTitle}"
            </p>
          </div>

          {/* Star Rating */}
          <div className="space-y-2">
            <Label className="font-comic font-bold text-base">
              Rate this story (1-5 stars):
            </Label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="transition-all duration-200 hover:scale-110 focus:outline-none"
                  aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= rating
                        ? "fill-rainbow-yellow text-rainbow-yellow"
                        : "text-muted-foreground hover:text-rainbow-yellow/50"
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-center font-comic text-sm text-muted-foreground mt-2">
                {rating === 1 && "😔 We'll try to do better!"}
                {rating === 2 && "😐 Thanks for the feedback!"}
                {rating === 3 && "🙂 Glad you enjoyed it!"}
                {rating === 4 && "😊 So happy you liked it!"}
                {rating === 5 && "🤩 Amazing! You loved it!"}
              </p>
            )}
          </div>

          {/* Feedback Text */}
          <div className="space-y-2">
            <Label htmlFor="feedback" className="font-comic font-bold text-base">
              Tell us what you thought (optional):
            </Label>
            <Textarea
              id="feedback"
              placeholder="What did you like most? Any suggestions? Tell us about your favorite character or scene!"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[100px] font-comic resize-none"
              maxLength={500}
            />
            <div className="text-right text-xs text-muted-foreground font-comic">
              {feedback.length}/500 characters
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 font-comic font-bold"
            >
              Maybe Later
            </Button>
            <Button
              type="submit"
              className="flex-1 font-comic font-bold bg-gradient-to-r from-rainbow-green to-rainbow-blue hover:from-rainbow-green/90 hover:to-rainbow-blue/90"
            >
              Submit Review 🌟
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackDialog;