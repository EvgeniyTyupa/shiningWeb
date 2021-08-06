import React from 'react'
import classes from './Preloader.module.css'
import preloader from '../../../Assets/animated/preloader.svg'
import BackgroundContainer from '../../UI/BackgroundContainer/BackgroundContainer'

const Preloader = (props) => {
    return(
        <BackgroundContainer>
            <img src={preloader} className={classes.img} alt="preloader"/>
        </BackgroundContainer>
    )
}

export default Preloader