import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_CHAT_URL
});

export async function sendMessage(options) {
  const response = await api.post("/chat", options);
  return response.data;
}