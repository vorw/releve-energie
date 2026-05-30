import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
// For now, I will use a simple implementation without external libraries to keep it straightforward.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none rounded-md";
    
    const variants = {
      primary: "bg-brand-green hover:bg-brand-green-dark text-white shadow-sm",
      secondary: "bg-brand-dark hover:bg-gray-800 text-white shadow-sm",
      outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white",
      ghost: "text-gray-700 hover:bg-gray-100",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
