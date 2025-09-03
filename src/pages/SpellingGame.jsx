import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
import { stories } from "../data/stories";
import { ArrowLeft, Check, X } from "lucide-react";

const SpellingGame = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === id);
  const [currentWord, setCurrentWord] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-kid text-3xl text-foreground mb-4">Story Not Found</h1>
          <Link to="/stories">
            <Button>Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getCharacterNames = () => {
    switch (story.id) {
      case "tortoise-and-hare":
        return ["tortoise", "hare", "race", "slow", "fast"];
      case "three-little-pigs":
        return ["pig", "wolf", "house", "brick", "straw"];
      case "ant-and-grasshopper":
        return ["ant", "grasshopper", "winter", "work", "play"];
      default:
        return ["story", "character", "lesson", "book", "read"];
    }
  };

  const words = getCharacterNames();

  const checkAnswer = () => {
    const isCorrect = userAnswer.toLowerCase().trim() === words[currentWord].toLowerCase();
    setShowResult(true);
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentWord < words.length - 1) {
        setCurrentWord(currentWord + 1);
        setUserAnswer("");
        setShowResult(false);
      } else {
        setGameComplete(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    setCurrentWord(0);
    setUserAnswer("");
    setScore(0);
    setShowResult(false);
    setGameComplete(false);
  };

  if (gameComplete) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="text-center bg-gradient-to-br from-rainbow-yellow/20 to-rainbow-green/20 border-2 border-rainbow-yellow/30">
            <div className="p-6">
              <h1 className="font-kid text-4xl text-foreground mb-4">
                🎉 Great Job! 🎉
              </h1>
              <div className="space-y-6">
                <div className="text-6xl mb-4">
                  {score === words.length ? "🌟" : score >= words.length / 2 ? "👏" : "💪"}
                </div>
                <h2 className="font-comic text-2xl text-foreground">
                  You spelled {score} out of {words.length} words correctly!
                </h2>
                <div className="flex justify-center gap-4">
                  <Button onClick={restartGame} className="font-comic font-bold">
                    🔄 Try Again
                  </Button>
                  <Link to={`/story/${id}`}>
                    <Button variant="outline" className="font-comic font-bold">
                      📚 Back to Story
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6">
          <Link to={`/story/${id}`}>
            <Button variant="outline" className="font-comic font-bold rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Story
            </Button>
          </Link>
        </div>

        <Card className="bg-gradient-to-br from-rainbow-blue/20 to-rainbow-purple/20 border-2 border-rainbow-blue/30">
          <div className="p-6">
            <h1 className="font-kid text-3xl text-foreground text-center mb-4">
              🔤 Spelling Challenge
            </h1>
            <div className="text-center mb-6">
              <div className="font-comic text-lg text-muted-foreground">
                Word {currentWord + 1} of {words.length}
              </div>
              <div className="font-comic text-sm text-muted-foreground">
                Score: {score}/{words.length}
              </div>
            </div>
            <div className="space-y-6 text-center">
              <div className="text-6xl mb-4">📝</div>
              
              <div className="space-y-4">
                <h2 className="font-kid text-2xl text-foreground">
                  Spell this word:
                </h2>
                <div className="text-4xl font-bold text-primary font-comic">
                  {words[currentWord].toUpperCase()}
                </div>
              </div>

              {!showResult && (
                <div className="space-y-4">
                  <Input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    placeholder="Type the word here..."
                    className="text-center text-lg font-comic"
                    onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  />
                  <Button 
                    onClick={checkAnswer}
                    disabled={!userAnswer.trim()}
                    className="font-comic font-bold"
                  >
                    ✓ Check Answer
                  </Button>
                </div>
              )}

              {showResult && (
                <div className="space-y-4">
                  <div className="text-6xl">
                    {userAnswer.toLowerCase().trim() === words[currentWord].toLowerCase() ? (
                      <><Check className="w-16 h-16 text-rainbow-green mx-auto" />🎉</>
                    ) : (
                      <><X className="w-16 h-16 text-rainbow-red mx-auto" />💪</>
                    )}
                  </div>
                  <div className="font-comic text-xl text-foreground">
                    {userAnswer.toLowerCase().trim() === words[currentWord].toLowerCase() 
                      ? "Excellent! You got it right!" 
                      : `Good try! The correct spelling is: ${words[currentWord]}`
                    }
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SpellingGame;