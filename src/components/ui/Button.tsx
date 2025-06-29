import React from "react";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 w-full font-semibold text-white transition duration-300  disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "border-[.5px] border-white/25 bg-[radial-gradient(circle_at_0%_0%,#0040E9_0%,#3C71FF_100%)] hover:opacity-90",
    secondary: "bg-[#949494] hover:opacity-90 ",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
