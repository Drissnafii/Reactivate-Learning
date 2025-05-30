import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Textfield from './forms/TextField'
// import './index.css'
// React components must start with an uppercase letter.
// If your component is exported as default from './HelloFolder/hello', import it as 'Hello' (uppercase).
import Hello from './HelloFolder/Hello'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello name = 'Driss' lastName = 'Nafii' />
    <Hello name = 'Rachid' lastName = 'Nafii' />
    <Hello name = 'Maryem' lastName = 'Nafii' />

    <Textfield inputName = 'lastName' />
  </StrictMode>,
)
