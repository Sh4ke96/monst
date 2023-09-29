import { FC } from "react";
import { tv } from "tailwind-variants";

const ButtonVariants = tv({
  base: "bg-blue text-sm w-fit h-fit text-white font-medium px-4 py-3 rounded-xl transition duration-200 ease-in-out hover:scale-105",
  variants: {
    color: {
      primary: "bg-blue",
      secondary: "bg-white",
    },
    border: {
      base: "border-none",
      "outline-blue": "border border-blue/50",
      "outline-gray": "border border-gray/50",
    },
    textColor: {
      white: "text-white",
      blue: "text-blue",
      gray: "text-gray",
    },
    width: {
      fit: "w-fit",
      full: "w-full",
    },
  },
});

type ButtonColor = "primary" | "secondary";
type ButtonBorder = "base" | "outline-blue" | "outline-gray";
type ButtonTextColor = "white" | "blue" | "gray";
type ButtonWidth = "fit" | "full";
interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  color: ButtonColor;
  textColor: ButtonTextColor;
  border: ButtonBorder;
  width?: ButtonWidth;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type,
  children,
  disabled,
  onClick,
  color,
  textColor,
  border,
  width,
}) => {
  const classNames = ButtonVariants({ border, color, textColor, width });
  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
