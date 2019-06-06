import React from 'react'
import classes from './navbar.module.css';


function Navbar() {
    return (
        <div className="d-flex flex-column align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <nav className={classes.navbar}>
                <a href="about" className="p-3 text-dark">About</a>
                <a href="projects" className="p-3 text-dark">Projects</a>
                <a href="contact" className="p-3 text-dark">Contact</a>
            </nav>
        </div>  
    )
}

export default Navbar