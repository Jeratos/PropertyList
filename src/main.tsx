import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DisplayContextProvider } from './context/Context.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DisplayContextProvider>
    <App />
    </DisplayContextProvider>
  </StrictMode>,
)
