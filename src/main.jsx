import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DashBoard from './DashBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DashBoard />
  </StrictMode>,
)
