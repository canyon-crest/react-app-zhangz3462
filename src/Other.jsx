import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from './Nav.jsx'
import Card from './Card.jsx'
import { useState } from 'react';


function Other() {
  return(
    <>
      <Card name="Lime" description="Limes are typically green."/>
      <Card name="Blueberry" description="Blueberries are typically blue."/>
      <Card name="Grape" description="Grapes are typically purple."/>
    </>
  )

  
}


export default Other;
