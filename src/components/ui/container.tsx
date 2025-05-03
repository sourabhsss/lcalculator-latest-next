
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("container mx-auto px-4", className)}>
      {children}
    </div>
  );
};
