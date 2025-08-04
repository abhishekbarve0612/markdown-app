import styles from "./textarea.module.css";

import cn from "@/utils/cn";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea className={cn(styles.textarea, className)} {...props} />;
};

export default Textarea;
