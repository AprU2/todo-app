import "./input-field-component.scss";

interface InputFieldProps {
  placeholder?: string;
  autoComplete?: string;
  type?: string;
  className?: string;

  width?: string;
  height?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
}

const InputField = ({
  placeholder = "",
  autoComplete = "off",
  type = "text",
  className = "",
  width,
  height,
  borderRadius,
  borderWidth,
  borderColor,
}: InputFieldProps) => {
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius,
    borderWidth,
    borderColor,
  };

  return (
    <input
      className={`input-field ${className}`}
      placeholder={placeholder}
      autoComplete={autoComplete}
      type={type}
      style={style}
    />
  );
};

export default InputField;
