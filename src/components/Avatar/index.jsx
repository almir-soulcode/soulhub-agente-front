import "./index.css";
import userAvatar from "../../assets/user-avatar.png";

export default function Avatar({ src = userAvatar, size = 30 }) {
  return (
    <img
      src={src}
      width={size}
      height={size}
      className="avatar"
    />
  );
}
