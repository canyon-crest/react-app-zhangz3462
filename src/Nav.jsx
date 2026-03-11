import './Nav.css';
import { useState } from 'react';
import './index.css'


function Nav({ setPage }){
    return(
        <div>
            <header>
            <nav>
            <ul>
                <li onClick={() => setPage("home")}>Home</li>
                <li onClick={() => setPage("other")}>Other</li>
                <li onClick={() => setPage("contact")}>Contact</li>
            </ul>
            </nav>
            </header>
        
        </div>
    )
}

export default Nav