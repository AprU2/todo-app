import type { HTMLAttributes } from "react";
import "./column-component.scss";

interface ColumnProps extends HTMLAttributes<HTMLDivElement> {
  justifyContent?: "flex-start" | "flex-end" | "center" | "space-between";
  alignItems?: "flex-start" | "flex-end" | "center";
  gap?: number;
}

const Column = ({
  justifyContent,
  alignItems,
  gap,
  children,
  style,
  className,
  ...props
}: ColumnProps) => {
  return (
    <div
      className={`column ${className}`}
      style={{ justifyContent, alignItems, gap, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Column;
