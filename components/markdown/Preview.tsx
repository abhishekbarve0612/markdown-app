import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./preview.module.css";

interface PreviewProps {
  markdown: string;
}

const Preview = ({ markdown }: PreviewProps) => {
  return (
    <div className={styles.markdownPreview}>
      <article>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
};

export default Preview;
