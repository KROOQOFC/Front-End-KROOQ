import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginUsuario from './pages/LoginUsuario/LoginUsuario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginUsuario/>
  </StrictMode>,
)
