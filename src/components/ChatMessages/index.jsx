import { useEffect, useRef } from "react";
import MessageItem from "../MessageItem";
import "./index.css";
import { ThreeDot } from "react-loading-indicators";

export default function ChatMessages({ messages, loading }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  if (messages.length === 0) {
    return (
      <section className="chat-message-area">
        <div className="chat-message-empty">Envie uma pergunta para começar</div>
      </section>
    );
  }

  return (
    <section className="chat-message-area">
      {messages.map((m, i) => (
        <MessageItem key={i} sender={m.sender} text={m.text} />
      ))}
      {loading && (
        <div className="loading">
          <ThreeDot color="#0000FF" size="small" text="" textColor="" />
        </div>
      )}
      <div ref={endRef} />
    </section>
  );
}
