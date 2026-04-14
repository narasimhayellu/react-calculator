import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Notes from './notes.jsx'
import Quiz from './quiz.jsx'
import Calculator from './calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Calculator/>
  </StrictMode>,
)
