import React from 'react' ; 
import { Link } from "react-router-dom" ; 
export default function Navbar() {
  return (
     <nav className='Nav'>
        <div className='Title'><Link to="/">HOME</Link></div>
        <ul className='nav-options' >
            <li><Link to="/">About</Link></li>
            <li><Link to="#socials">socials</Link></li>
        </ul>

     </nav>
  )
}
