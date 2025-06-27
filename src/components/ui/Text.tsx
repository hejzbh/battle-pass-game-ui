import React from "react";

type TextProps = {
  className?: string;
  variant?: "p" | "span";
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  children: React.ReactNode;
  withoutDefaultClass?: boolean;
};

const sizeClasses = {
  xxs: "text-[0.8rem]  tracking-[0.055em]",
  xs: "text-[0.9375rem] tracking-[0.035em]", // 15px
  sm: "text-[1.050rem] tracking-[0.035em]", // 16px
  md: "text-[1.125rem] font-semibold tracking-[0.035em]", // 18px
  lg: "text-[1.25rem] tracking-[0.035em]", // 20px
  xl: "text-[1.55rem] font-[600] tracking-[0.035em]", // 28.8px
  "2xl": "text-[2.1rem] font-bold tracking-[0.005em]",
  "3xl": "text-[2rem] lg:text-[4.375rem] font-bold tracking-[0.005em]", // 32px / 70px (lg)
};
const Text = ({
  className = "",
  variant = "p",
  size = "md",
  children,
  withoutDefaultClass,
}: TextProps) => {
  const Element = variant;

  return (
    <Element
      className={` ${!withoutDefaultClass && "text-textColors-primary"} ${
        sizeClasses[size]
      } ${className}`}
    >
      {children}
    </Element>
  );
};

export default Text;
