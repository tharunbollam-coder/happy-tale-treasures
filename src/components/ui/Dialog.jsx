import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { X } from "lucide-react";

const Dialog = ({ children, open, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const setIsOpen = onOpenChange || setInternalOpen;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Content */}
      <div className="relative z-50 w-full max-w-lg mx-4">
        {children({ isOpen, setIsOpen })}
      </div>
    </div>
  );
};

const DialogTrigger = ({ children, asChild, onClick }) => {
  if (asChild) {
    return children;
  }
  
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

const DialogContent = ({ children, className = "", onClose }) => (
  <div className={cn(
    "bg-background border border-border rounded-lg shadow-lg p-6",
    className
  )}>
    <button
      className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      onClick={onClose}
    >
      <X className="h-4 w-4" />
    </button>
    {children}
  </div>
);

const DialogHeader = ({ children, className = "" }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)}>
    {children}
  </div>
);

const DialogTitle = ({ children, className = "" }) => (
  <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)}>
    {children}
  </h2>
);

const DialogDescription = ({ children, className = "" }) => (
  <p className={cn("text-sm text-muted-foreground", className)}>
    {children}
  </p>
);

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription };