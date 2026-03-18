import Nav from './Nav.jsx'
import Other from './Other.jsx'
import Contact from './Contact.jsx'
import { useState } from 'react';
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import './index.css'
import App2 from './App2.jsx'
import AddItemForm from './firebaseStore.jsx'
import CatGenerator from './catGenerator.jsx'




function App() {
  const [page, setPage] = useState("home");

  return (
    <>
    <App2 />
    <AddItemForm />
    <Nav setPage={setPage}/>
    {page === "home" && <div><Card name="Regular Apple" description="Neon red! May cause violent hiccups."/>
    <Card name=" 50% Transparency Orange" description="Tastes like a concept of a lemon, may cause increased bone malleability."/>
    <Card name="Bananananana" description="Lasts for 50 years before rotting, but teeth may start growing on the surface."/></div>}
    {page === "other" &&<Other />}
    {page === "contact" &&<Contact />}
    <Footer />
    </>

  )
}

export default App
