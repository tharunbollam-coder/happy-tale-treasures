import { useState } from "react";
import { cn } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

const Select = ({ children, value, onValueChange, disabled = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      {children({ isOpen, setIsOpen, value, onValueChange, disabled })}
    </div>
  );
};

const SelectTrigger = ({ children, className = "", isOpen, setIsOpen, disabled }) => (
  <button
    type="button"
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    onClick={() => !disabled && setIsOpen(!isOpen)}
    disabled={disabled}
  >
    {children}
    <ChevronDown className="h-4 w-4 opacity-50" />
  </button>
);

const SelectValue = ({ placeholder = "", value, children }) => (
  <span className={cn(!value && "text-muted-foreground")}>
    {value ? children : placeholder}
  </span>
);

const SelectContent = ({ children, isOpen, className = "" }) => {
  if (!isOpen) return null;
  
  return (
    <div className={cn(
      "absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-md",
      className
    )}>
      <div className="p-1">
        {children}
      </div>
    </div>
  );
};

const SelectItem = ({ children, value, onSelect, className = "" }) => (
  <div
    className={cn(
      "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    onClick={() => onSelect && onSelect(value)}
  >
    {children}
  </div>
);

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };