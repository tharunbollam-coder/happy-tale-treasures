import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "../lib/utils";

const Breadcrumbs = ({ items = [], className = "" }) => {
  // Default items if none provided
  const defaultItems = [
    { label: 'Home', href: '/' }
  ];
  
  const breadcrumbItems = items.length > 0 ? items : defaultItems;

  return (
    <nav 
      className={cn("flex items-center space-x-2 text-sm font-comic mb-6", className)}
      aria-label="Breadcrumb"
    >
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />
          )}
          
          {index === 0 && (
            <Home className="w-4 h-4 mr-2 text-muted-foreground" />
          )}
          
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-foreground font-bold">
              {item.label}
            </span>
          ) : (
            <Link 
              to={item.href} 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;