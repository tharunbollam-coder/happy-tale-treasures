import { cn } from "../../lib/utils";

const Label = ({ 
  children, 
  className = "",
  htmlFor,
  ...props 
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;