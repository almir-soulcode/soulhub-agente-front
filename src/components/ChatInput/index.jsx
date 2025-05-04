import { useState } from "react";
import Button from "../Button";
import "./index.css";
import { OrbitProgress } from "react-loading-indicators";

export default function ChatInput({ onSubmit, loading }) {
  const [options, setOptions] = useState({
    pergunta: "",
    nivel: "iniciante",
    tipo: "objetiva",
    exemplos: "nao",
  });

  function setValue(label, value) {
    setOptions({
      ...options,
      [label]: value,
    });
  }

  function handleSubmit() {
    if (options.pergunta.trim() != "") {
      onSubmit(options);
      setValue("pergunta", "");
    }
  }

  return (
    <section className="chat-input">
      <div className="chat-input-container">
        <input
          name="pergunta"
          className="chat-message-input"
          type="text"
          placeholder="Digite sua pergunta"
          onChange={(e) => setValue(e.target.name, e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          value={options.pergunta}
        />
        <Button
          size="m"
          onClick={handleSubmit}
          disabled={options.pergunta.length == 0}
        >
          {!loading && `Enviar`}
          {loading && (
            <div className="chat-input-button">
              <OrbitProgress
                dense
                color="#ffffff"
                size="small"
                text=""
                textColor=""
                style={{ width: "28px" }}
              />
            </div>
          )}
        </Button>
      </div>
      <div className="chat-filter-options">
        <div className="filter-option">
          <fieldset>
            <p>Nível da Resposta</p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="nivel"
                  value="iniciante"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  defaultChecked
                />
                Iniciante
              </label>
              <label>
                <input
                  type="radio"
                  name="nivel"
                  value="intermediario"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
                Intermediário
              </label>
              <label>
                <input
                  type="radio"
                  name="nivel"
                  value="avancado"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
                Avançado
              </label>
            </div>
          </fieldset>
        </div>

        <div className="filter-option">
          <fieldset>
            <p>Tipo de Resposta</p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="objetiva"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  defaultChecked
                />
                Objetiva
              </label>
              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="media"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
                Média
              </label>
              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="detalhada"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
                Detalhada
              </label>
            </div>
          </fieldset>
        </div>
        <div className="filter-option">
          <fieldset>
            <p>Deseja exemplos?</p>
            <div className="options">
              <label>
                <input
                  type="radio"
                  name="exemplos"
                  value="sim"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="exemplos"
                  value="nao"
                  onChange={(e) => setValue(e.target.name, e.target.value)}
                  defaultChecked
                />
                Não
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </section>
  );
}
