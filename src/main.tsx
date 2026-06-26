import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
)

