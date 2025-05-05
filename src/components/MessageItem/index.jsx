/* eslint-disable no-unused-vars */
import "./index.css";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import CopyButton from "../CopyButton";
import Avatar from "../Avatar";
import chatAvatar from "../../assets/chat-ai.jpeg";

export default function MessageItem({ sender, text }) {
  const renderers = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");

      const codeString = String(children).replace(/\n$/, "");

      return !inline && match ? (
        <div className="relative">
          <CopyButton code={codeString} />
          <SyntaxHighlighter
            style={oneLight}
            language={match[1]}
            PreTag="div"
            customStyle={{
              borderRadius: "8px",
              padding: "12px",
              fontSize: "0.85rem",
              overflowX: "auto",
            }}
            {...props}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className="inline-code" {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className={`message-item-wrapper ${sender === "user" ? "user" : "nonuser"}`}>
      <Avatar src={sender !== "user" ? chatAvatar : undefined}/>
      <div className={`message-item ${sender === "user" ? "user" : "nonuser"}`}>
        {sender === "user" ? (
          text
        ) : (
          <ReactMarkdown
            components={{
              ...renderers,
              ul: ({ node, ...props }) => (
                <ul className="custom-list" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="custom-ordered-list" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="custom-list-item" {...props} />
              ),
              h1: ({ node, ...props }) => (
                <h1 className="custom-h1" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="custom-h2" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="custom-h3" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h4 className="custom-h4" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="custom-paragraph" {...props} />
              ),
            }}
            remarkPlugins={[remarkGfm]}
          >
            {text}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}
