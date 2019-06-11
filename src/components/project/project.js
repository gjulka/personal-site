import React from 'react'
import classes from './project.module.css';

function Project(props) {
    return(
        <div id={props.id} className={classes.project}>
            <li className="list-group-item list-group-item-dark">
                <img src={props.image}/> 
                <div className={classes.Overlay}>
                    <div className={classes.details}>
                        <h1><u>{props.title}</u></h1>
                        <div className={classes.learnmore}>
                            <button className={classes.learnmorebutton} onClick={props.toggleButton}>
                                <h2>Learn more</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    )
}

export default Project