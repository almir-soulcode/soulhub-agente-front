import { useState } from "react";
import ChatInput from "../ChatInput";
import ChatMessages from "../ChatMessages";
import "./index.css";
import { sendMessage } from "../../services/chatApiService";

export default function Chat() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  return (
    <section className="chat-area">
      <ChatMessages messages={messages} loading={loading} />
      <ChatInput
        loading={loading}
        onSubmit={(options) => {
          setLoading(true);
          setMessages((prev) => [
            ...prev,
            { text: options.pergunta, sender: "user" },
          ]);

          sendMessage(options).then((resp) => {
            setMessages((prev) => [
              ...prev,
              { text: resp.resposta, sender: "nonuser" },
            ]);
            setLoading(false);
          });
        }}
      />
    </section>
  );
}
