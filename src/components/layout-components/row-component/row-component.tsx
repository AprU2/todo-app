import type { HTMLAttributes } from "react";
import "./row-component.scss";

interface RowProps extends HTMLAttributes<HTMLDivElement> {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
  alignItems?: "flex-start" | "flex-end" | "center";
  gap?: number;
}

const Row = ({
  justifyContent,
  alignItems,
  gap,
  children,
  style,
  className,
  ...props
}: RowProps) => {
  return (
    <div
      className={`row ${className}`}
      style={{ justifyContent, alignItems, gap, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Row;
