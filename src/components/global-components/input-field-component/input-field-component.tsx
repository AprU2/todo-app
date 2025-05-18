import React from "react";
import "./input-field-component.scss";

const InputField = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    { placeholder = "", autoComplete = "off", className = "", ...props },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={`input-field ${className}`}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...props}
      />
    );
  }
);

export default InputField;
