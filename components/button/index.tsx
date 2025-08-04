import styles from "./button.module.css";
import cn from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  iconOnly?: boolean;
}

const Button = ({
  children,
  iconOnly = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        iconOnly && styles.buttonIconOnly,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
