import React from 'react';
import classes from './landing.module.css';


function LandingPage() {
    return(
        <div className={classes.About}>
            <div className="px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 style={{color: 'white'}}>Gaurav Julka</h1>
                <p style={{color: 'white'}} className="lead">I am a highly motivated 
                    <span>Web Developer</span>, with a passion for 
                    creating intuitive designs and dynamic user experiences.
                </p>
                <button type="button" className="btn btn-light">View my work</button>
            </div>
        </div>
        
    )
}

export default LandingPage
