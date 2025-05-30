import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// React components must start with an uppercase letter.
// If your component is exported as default from './HelloFolder/hello', import it as 'Hello' (uppercase).
import Hello from './HelloFolder/hello'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
  </StrictMode>,
)
