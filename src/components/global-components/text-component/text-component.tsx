import "./text-component.scss";

interface TextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  weight?: "normal" | "medium" | "bold";
  className?: string;
}

const BaseText = ({
  children,
  size = "md",
  weight = "normal",
  className = "",
}: TextProps) => {
  return (
    <p className={`text text--${size} text--${weight} ${className}`}>
      {children}
    </p>
  );
};

export default BaseText;
