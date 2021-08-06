import React, { useEffect } from 'react'
import classes from './Main.module.css'
import micropone from '../../Assets/images/micro.svg'
import slogan from '../../Assets/images/slogan.svg'

import Aos from 'aos';
import 'aos/dist/aos.css';
import OrderForm from '../../Components/Forms/OrderForm/OrderForm';

const Main = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return(
        <div className={classes.main}>
            <div className={classes.home}>
                <img src={micropone} data-aos="fade-right" alt="micro"/>
                <img src={slogan} alt="slogan"/>
                <div>
                    <OrderForm/>
                </div>
            </div>
            
        </div>
    )
}

export default Main