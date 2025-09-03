import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { stories } from "../data/stories";
import { ArrowLeft, Check, X } from "lucide-react";

const StoryQuestions = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
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

  const getQuestions = () => {
    switch (story.id) {
      case "tortoise-and-hare":
        return [
          {
            question: "Who won the race?",
            options: ["The Hare", "The Tortoise", "They tied", "Nobody"],
            correct: "The Tortoise",
            explanation: "The tortoise won because he was slow and steady!"
          },
          {
            question: "What did the hare do during the race?",
            options: ["Kept running", "Took a nap", "Got lost", "Gave up"],
            correct: "Took a nap",
            explanation: "The hare was overconfident and decided to take a nap!"
          },
          {
            question: "What is the moral of the story?",
            options: ["Fast is better", "Slow and steady wins", "Never race", "Sleep is important"],
            correct: "Slow and steady wins",
            explanation: "Being consistent and persistent is better than being fast but careless!"
          }
        ];
      case "three-little-pigs":
        return [
          {
            question: "What material did the first pig use for his house?",
            options: ["Bricks", "Sticks", "Straw", "Stone"],
            correct: "Straw",
            explanation: "The first pig built his house with straw, which was not very strong!"
          },
          {
            question: "Which house could the wolf not blow down?",
            options: ["Straw house", "Stick house", "Brick house", "All houses"],
            correct: "Brick house",
            explanation: "The brick house was strong and couldn't be blown down!"
          },
          {
            question: "What lesson does this story teach?",
            options: ["Work fast", "Use cheap materials", "Work hard and smart", "Avoid wolves"],
            correct: "Work hard and smart",
            explanation: "Hard work and using good materials keeps us safe!"
          }
        ];
      case "ant-and-grasshopper":
        return [
          {
            question: "What did the ant do all summer?",
            options: ["Played music", "Slept", "Worked and stored food", "Traveled"],
            correct: "Worked and stored food",
            explanation: "The ant worked hard all summer to prepare for winter!"
          },
          {
            question: "What did the grasshopper do all summer?",
            options: ["Worked", "Stored food", "Played and sang", "Built a house"],
            correct: "Played and sang",
            explanation: "The grasshopper spent all summer playing instead of preparing!"
          },
          {
            question: "What happened when winter came?",
            options: ["Both were happy", "Grasshopper had no food", "Ant had no food", "They both traveled"],
            correct: "Grasshopper had no food",
            explanation: "The grasshopper was hungry because he didn't prepare for winter!"
          }
        ];
      default:
        return [
          {
            question: "Did you enjoy this story?",
            options: ["Yes", "No", "Maybe", "I love it!"],
            correct: "I love it!",
            explanation: "Great! Reading stories is fun and educational!"
          }
        ];
    }
  };

  const questions = getQuestions();

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    if (answer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameComplete(true);
      }
    }, 3000);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setGameComplete(false);
  };

  if (gameComplete) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="text-center bg-gradient-to-br from-rainbow-green/20 to-rainbow-blue/20 border-2 border-rainbow-green/30">
            <div className="p-6">
              <h1 className="font-kid text-4xl text-foreground mb-4">
                🎉 Fantastic! 🎉
              </h1>
              <div className="space-y-6">
                <div className="text-6xl mb-4">
                  {score === questions.length ? "🌟" : score >= questions.length / 2 ? "👏" : "📚"}
                </div>
                <h2 className="font-comic text-2xl text-foreground">
                  You answered {score} out of {questions.length} questions correctly!
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

        <Card className="bg-gradient-to-br from-rainbow-purple/20 to-rainbow-green/20 border-2 border-rainbow-purple/30">
          <div className="p-6">
            <h1 className="font-kid text-3xl text-foreground text-center mb-4">
              ❓ Story Questions
            </h1>
            <div className="text-center mb-6">
              <div className="font-comic text-lg text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <div className="font-comic text-sm text-muted-foreground">
                Score: {score}/{questions.length}
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-kid text-2xl text-foreground mb-6">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              {!showResult && (
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full p-4 text-left font-comic text-lg hover:scale-105 transition-all duration-200"
                      onClick={() => handleAnswer(option)}
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              )}

              {showResult && (
                <div className="space-y-4 text-center">
                  <div className="text-6xl">
                    {selectedAnswer === questions[currentQuestion].correct ? (
                      <><Check className="w-16 h-16 text-rainbow-green mx-auto" />🎉</>
                    ) : (
                      <><X className="w-16 h-16 text-rainbow-red mx-auto" />📚</>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="font-comic text-xl text-foreground">
                      {selectedAnswer === questions[currentQuestion].correct 
                        ? "Excellent! You got it right!" 
                        : `Good try! The correct answer is: ${questions[currentQuestion].correct}`
                      }
                    </div>
                    <div className="font-comic text-sm text-muted-foreground bg-secondary/50 p-3 rounded-lg">
                      💡 {questions[currentQuestion].explanation}
                    </div>
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

export default StoryQuestions;