import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./preview.module.css";

interface PreviewProps {
  markdown: string;
  fontSize: number;
}

const Preview = ({ markdown, fontSize }: PreviewProps) => {
  return (
    <div
      className={styles.markdownPreview}
      style={{ fontSize: `${fontSize}%` } as React.CSSProperties}
    >
      <article>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </article>
    </div>
  );
};

export default Preview;
