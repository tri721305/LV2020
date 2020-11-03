import React, {Component} from 'react' 
import './NavTri.css'
import {Link}  from 'react-router-dom'



function Navdisplay(){
    return(
        <div className='navbar'>
            <ul className="nav-links">
                <Link className="test" to='/'>
                <li>Trip</li>
                </Link>
                <Link className="test" to='/destination' >
                <li>Destination</li>
                </Link>
                <Link className="test" to='/blog' >
                <li>Blog</li>
                </Link>
                <Link className="test" to='/contact' >
                <li>Contact</li>
                </Link>
                <Link className="test" to='/login' >
                <li>Login</li>
                </Link>
            </ul>
        </div>
       
    )
}

export default Navdisplay