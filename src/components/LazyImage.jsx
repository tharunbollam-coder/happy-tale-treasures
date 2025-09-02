import { useState } from "react";
import { cn } from "../lib/utils";

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  width, 
  height, 
  loading = "lazy",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  if (hasError) {
    return (
      <div 
        className={cn("bg-muted flex items-center justify-center", className)}
        style={{ width, height }}
      >
        <span className="text-muted-foreground text-sm">Image not found</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className={cn("bg-muted animate-pulse", className)}
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          !isLoaded && "opacity-0 absolute inset-0"
        )}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default LazyImage;