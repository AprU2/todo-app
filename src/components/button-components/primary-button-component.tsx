import type { ButtonHTMLAttributes } from "react";
import "./primary-button-component.scss";

interface SubmitFormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
  className?: string;
}

const PrimaryButton = ({
  children,
  loading = false,
  className = "",
  type,
  disabled,
  ...props
}: SubmitFormButtonProps) => {
  return (
    <button
      type={type}
      className={`primary-button ${className}`}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default PrimaryButton;
