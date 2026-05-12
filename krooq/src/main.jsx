import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profissionais from './pages/Profissionais/Profissionais.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*{<App />}*/}
    <Profissionais />
  </StrictMode>,
)
