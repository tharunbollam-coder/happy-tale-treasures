import { useState } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
}

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  width, 
  height, 
  loading = "lazy" 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={cn(
          "bg-muted flex items-center justify-center text-muted-foreground", 
          className
        )}
        style={{ width, height }}
      >
        <span>Image not available</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className={cn(
            "absolute inset-0 bg-muted animate-pulse", 
            className
          )}
          style={{ width, height }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        width={width}
        height={height}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />
    </div>
  );
};

export default LazyImage;