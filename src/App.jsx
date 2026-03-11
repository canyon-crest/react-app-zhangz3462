import Nav from './Nav.jsx'
import Other from './Other.jsx'
import Contact from './Contact.jsx'
import { useState } from 'react';
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import './index.css'




function App() {
  const [page, setPage] = useState("home");

  return (
    <>
    <Nav setPage={setPage}/>
    {page === "home" && <div><Card name="Apple" description="Apples are typically red/yellow."/>
    <Card name="Orange" description="Oranges are typically orange."/>
    <Card name="Banana" description="Bananas are typically yellow/green."/></div>}
    {page === "other" &&<Other />}
    {page === "contact" &&<Contact />}
    <Footer />
    </>

  )
}

export default App
