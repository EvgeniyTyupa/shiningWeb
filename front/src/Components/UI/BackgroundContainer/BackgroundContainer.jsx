import React, { useEffect } from 'react'
import classes from './BackgroundContainer.module.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const BackgroundContainer = (props) => {
    useEffect(() => {
        Aos.init({ duration: 200 })
    }, [])

    return(
        <div className={classes.main} data-aos="fade">
            {props.children}
        </div>
    )
}

export default BackgroundContainer;