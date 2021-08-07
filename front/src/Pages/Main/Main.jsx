import React, { useEffect } from 'react'
import classes from './Main.module.css'
import micropone from '../../Assets/images/micro.svg'
import slogan from '../../Assets/images/slogan.svg'

import Aos from 'aos'
import 'aos/dist/aos.css'
import OrderForm from '../../Components/Forms/OrderForm/OrderForm'
import { useTranslation } from 'react-i18next'
import { useMerities } from './useMerities'

const Main = (props) => {
    const { t } = useTranslation()

    const merities = useMerities()

    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);

    return(
        <div className={classes.main}>
            <div className={classes.home}>
                <img src={micropone} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900" alt="micro" className={classes.micro}/>
                <img src={slogan} data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300" alt="slogan" className={classes.slogan}/>
                <div className={classes.orderContainer} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">
                    <OrderForm/>
                </div>
            </div>
            <div className={classes.we}>
                <div className={classes.weTitleContainer}>
                    <h2>{t("home.we.title")}</h2>
                    <p>{t("home.we.studio")} <strong>Shining Music</strong> - {t("home.we.one")}</p>
                    <p>{t("home.we.two")}</p>
                </div>
                <div className={classes.merities}>
                    {merities.map((item, index) => (
                        <div className={classes.meritie}>
                            <div className={classes.meritieBack}/>
                            <label>{index + 1}</label>
                            <img src = {item.icon}/>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className={classes.services}>
                
            </div>
        </div>
    )
}

export default Main