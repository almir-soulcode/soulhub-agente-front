import { useState } from "react";
import './index.css';
import Button from "../Button";

export default function CopyButton({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return <Button className="copy-btn" onClick={handleCopy}>{copied ? "Copiado!" : "Copiar"}</Button>;
}
