import React from 'react'
import classes from './project.module.css';

function Project(props) {
    return(
        <div id={props.id} className={classes.column}>
            <div className={classes.content}>
                <img src={props.image} alt='' />
                <div className={classes.overlay}>
                    <div className={classes.details}>
                        <h1><u>{props.title}</u></h1>
                        <div className={classes.learnmore}>
                            <button className={classes.learnmorebutton} onClick={props.toggleButton}>
                                <h2>Learn more</h2>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project