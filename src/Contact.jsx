import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <p>I am not giving out my contact.</p>
  </StrictMode>,
)

export default Contact;
