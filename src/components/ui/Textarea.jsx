import { cn } from "../../lib/utils";

const Textarea = ({ 
  className = "", 
  placeholder = "",
  value,
  onChange,
  disabled = false,
  rows = 3,
  maxLength,
  ...props 
}) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      rows={rows}
      maxLength={maxLength}
      {...props}
    />
  );
};

export default Textarea;