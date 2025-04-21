import { ReactNode } from "react";

export default function Container({
  children,
  maxWidth = "max-w-[1200px]",
}: {
  children: ReactNode;
  maxWidth?: string;
}) {
  return <div className={`${maxWidth} mx-auto px-7 sm:px-6 `}>{children}</div>;
}
