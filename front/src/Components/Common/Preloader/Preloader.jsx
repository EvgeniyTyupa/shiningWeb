import React, { useEffect } from 'react'
import classes from './Preloader.module.css'
import preloader from '../../../Assets/animated/preloader.svg'
import BackgroundContainer from '../../UI/BackgroundContainer/BackgroundContainer'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Preloader = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])

    return(
        <BackgroundContainer>
            <img src={preloader} data-aos="fade" className={classes.img} alt="preloader"/>
        </BackgroundContainer>
    )
}

export default Preloader