import React from 'react'
import classes from './BackgroundContainer.module.css'

const BackgroundContainer = (props) => {
    return(
        <div className={classes.main}>
            {props.children}
        </div>
    )
}

export default BackgroundContainer;