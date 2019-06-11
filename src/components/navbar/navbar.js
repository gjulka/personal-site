import React from 'react'
import classes from './navbar.module.css';

import { Link } from 'react-scroll'


function Navbar() {
    return (
        <div className={classes.Navbar}>
            <div className="d-flex flex-column align-items-center p-3 px-md-4 mb-3">
                <nav className={classes.navbar}>
                    <div className={classes.navItem}>
                        <Link
                            activeClass="active"
                            to="landing"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >HOME</Link>
                    </div>
                    <div className={classes.navItem}>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >ABOUT</Link>
                    </div>
                    <div className={classes.navItem}>
                        <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >PROJECTS</Link>
                    </div>
                    <div className={classes.navItem}>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        >CONTACT</Link>
                    </div>
                </nav>
            </div>  
        </div>
       
    )
}

export default Navbar