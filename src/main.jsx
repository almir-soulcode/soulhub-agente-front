import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './variables.css'
import './index.css'
import './reset.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
