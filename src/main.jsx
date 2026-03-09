import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Card name="Apple" desc="Apples are typically red/yellow."/>
    <Card name="Orange" desc="Oranges are typically orange."/>
    <Card name="Banana" desc="Bananas are typically yellow/green."/>
    <App />
  </StrictMode>,
)
