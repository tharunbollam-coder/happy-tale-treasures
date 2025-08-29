import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

const Breadcrumbs = ({ items = [], className }: BreadcrumbsProps) => {
  const location = useLocation();
  
  // Generate breadcrumbs based on current location if no items provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      let label = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Custom labels for specific routes
      if (segment === 'stories') {
        label = 'All Stories';
      } else if (segment === 'story') {
        label = 'Story';
      } else if (segment.includes('spelling-game')) {
        label = 'Spelling Game';
      } else if (segment.includes('story-questions')) {
        label = 'Story Questions';
      }
      
      breadcrumbs.push({ label, href: currentPath });
    });
    
    return breadcrumbs;
  };

  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/' && items.length === 0) {
    return null;
  }

  return (
    <nav 
      className={cn("flex items-center space-x-2 text-sm text-muted-foreground mb-4", className)}
      aria-label="Breadcrumb navigation"
    >
      <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
        {breadcrumbItems.map((item, index) => (
          <li 
            key={item.href} 
            className="flex items-center space-x-2"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            {index > 0 && <ChevronRight className="w-4 h-4" />}
            {index === breadcrumbItems.length - 1 ? (
              <span 
                className="text-foreground font-medium"
                itemProp="name"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="hover:text-primary transition-colors flex items-center space-x-1"
                itemProp="item"
              >
                {index === 0 && <Home className="w-4 h-4" />}
                <span itemProp="name">{item.label}</span>
              </Link>
            )}
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;