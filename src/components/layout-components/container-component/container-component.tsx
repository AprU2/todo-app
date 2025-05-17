import React, { type HTMLAttributes } from "react";
import "./container-component.scss";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "", ...props }: ContainerProps) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
