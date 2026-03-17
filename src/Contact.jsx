import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'

function Contact() {
  return (
    <div>
      <p>Reach me at legitimatebusiness@gmail.com for more options!</p>
      <p>I sell artificial fruits! With the increase in global warming, </p>
      <p>and because the center of agriculture in California was bombed,</p>
      <p>I've devised a way to make fruits in the lab! </p>
      <p>Yes, some of them are sentient, but they are still very tasty.</p>
      <p>Due to my lack of research funding, some side effects may be present.</p>
      <p>Check out the descriptions on the fruits to know more!</p>
      <p>By the way, your data is NOT anonymous, and you are now signed up for my daily newsletters.</p>
      <p> I appreciate any funding! Preferably in Bitcoin, but any type will do. Thanks!</p>
    </div>
  )
}

export default Contact
