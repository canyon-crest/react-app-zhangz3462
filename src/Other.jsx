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
      <Card name="Lyme" description="Has exceptionally smooth skin, but may transmit Lyme disease."/>
      <Card name="Cyanberry" description="Very similar to a blueberry, but causes cyan discoloration of extremities."/>
      <Card name="Plume" description="Exceptionally sweet! Side effects include feather growth in lungs."/>
    </>
  )

  
}


export default Other;
