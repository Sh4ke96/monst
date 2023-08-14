import { FC } from "react";
import { tv } from "tailwind-variants";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const button = tv({
  base: "bg-blue text-sm w-fit h-fit text-white font-medium px-4 py-3 rounded-xl",
  variants: {
    color: {
      primary: "bg-blue",
      secondary: "bg-white",
    },
  },
});

const Button: FC<ButtonProps> = ({ type, children, disabled, onClick }) => {
  return (
    <button
      type={type}
      className={button()}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
