import "./index.css";

export default function Button({ children, onClick, size = "m", disabled, className }) {
  return (
    <button className={`button ${size} ${className}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
