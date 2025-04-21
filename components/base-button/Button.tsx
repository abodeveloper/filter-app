import { ReactNode } from "react";

const Button = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={` ${className} w-full rounded-lg py-2.5 bg-checkedRadio font-medium text-sm text-white hover:opacity-90`}
    >
      {children}
    </button>
  );
};

export default Button;
