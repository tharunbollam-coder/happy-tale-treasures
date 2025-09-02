import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <SEO 
        title="Page Not Found | KidsStories"
        description="The page you're looking for doesn't exist. Return to KidsStories to explore our collection of educational children's stories."
      />
      
      <div className="text-center">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="font-kid text-4xl md:text-6xl text-foreground mb-4">
          Oops! Page Not Found
        </h1>
        <p className="font-comic text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this page went on its own adventure! Let's get you back to the stories.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="font-comic font-bold rounded-full">
              🏠 Go Home
            </Button>
          </Link>
          <Link to="/stories">
            <Button variant="outline" size="lg" className="font-comic font-bold rounded-full">
              📚 Browse Stories
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;