import React from "react";
import { cn } from "@/app/utils/cn";

type TypographySize = "2xs" | "xs" | "sm" | "md" | "lg";
type TypographyWeight =
  | "light"
  | "regular"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";
type TypographyVariant = "body" | "headline";

// interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
//   children: React.ReactNode;
//   variant?: TypographyVariant;
//   size?: TypographySize;
//   weight?: TypographyWeight;
//   as?: keyof React.JSX.IntrinsicElements;
// }

interface TypographyProps<T extends keyof React.JSX.IntrinsicElements = "p">
  extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: TypographyVariant;
  size?: TypographySize;
  weight?: TypographyWeight;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | T;
  className?: string;
}

const sizeMap = {
  body: {
    "2xs": "text-[11px] leading-[16px]",
    xs: "text-[12px] leading-[18px]",
    sm: "text-[14px] leading-[20px]",
    md: "text-[16px] leading-[24px]",
    lg: "text-[18px] leading-[28px]",
  },
  headline: {
    "2xs": "text-[20px] leading-[28px]",
    xs: "text-[24px] leading-[30px]",
    sm: "text-[28px] leading-[36px]",
    md: "text-[40px] leading-[48px]",
    lg: "text-[48px] leading-[56px]",
  },
};

const weightMap = {
  light: "font-light",
  regular: "font-normal",
  medium: "font-medium",
  "semi-bold": "font-semibold",
  bold: "font-bold",
  "extra-bold": "font-extrabold",
  black: "font-black",
};

export function Typography({
  children,
  variant = "body",
  size = "md",
  weight = "regular",
  as,
  className,
  ...props
}: TypographyProps) {
  const Component = as || (variant === "headline" ? "h2" : "p");

  const classes = cn(
    "font-inter",
    sizeMap[variant][size],
    weightMap[weight],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
