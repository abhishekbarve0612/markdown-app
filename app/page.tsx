"use client";

import { useDropzone } from "react-dropzone";
import styles from "./page.module.css";
import Button from "@/components/button";
import { FiUploadCloud } from "react-icons/fi";
import { BiPrinter } from "react-icons/bi";
import { useCallback, useState } from "react";
import { defaultMarkdown } from "@/utils/constants";
import Textarea from "@/components/textarea";
import Preview from "@/components/markdown/Preview";
import { ThemeToggle } from "@/components/dark-mode";

export default function Home() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target?.result;
        if (typeof fileContent === "string") {
          setMarkdown(fileContent);
        }
      };
      reader.readAsText(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: {
      "text/markdown": [".md", ".markdown"],
    },
  });

  return (
    <div className={styles.container}>
      <header className={`${styles.header}`}>
        <h1 className={styles.headerTitle}>Markdown Renderer</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Button
            className={`${styles.button} ${styles.bgTransparent}`}
            onClick={open}
          >
            <FiUploadCloud
              style={{ width: "16px", height: "16px", marginRight: "8px" }}
            />
            Upload File
          </Button>
          <Button
            className={`${styles.button} ${styles.buttonIconOnly} ${styles.bgTransparent}`}
            onClick={() => {
              window.print();
            }}
          >
            <BiPrinter style={{ width: "16px", height: "16px" }} />
            <span className="sr-only">Print</span>
          </Button>
          <ThemeToggle />
        </div>
      </header>

      <main
        {...getRootProps()}
        className={styles.mainContent}
        style={{ outline: "none" }}
      >
        <input {...getInputProps()} />

        {isDragActive && (
          <div className={styles.dropzoneOverlay}>
            <div className={styles.dropzoneContent}>
              <FiUploadCloud className={styles.dropzoneIcon} />
              <span>Drop the markdown file here...</span>
            </div>
          </div>
        )}
        <div className={`${styles.editorPane}`}>
          <div className={styles.paneHeader}>
            <h2 className={styles.paneTitle}>Markdown</h2>
          </div>
          <Textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className={styles.textareaEditor}
            placeholder="Type your markdown here or drop a file..."
          />
        </div>
        <div className={`${styles.previewPane}`}>
          <div className={`${styles.paneHeader}`}>
            <h2 className={styles.paneTitle}>Preview</h2>
          </div>
          <Preview markdown={markdown} />
        </div>
      </main>
    </div>
  );
}
