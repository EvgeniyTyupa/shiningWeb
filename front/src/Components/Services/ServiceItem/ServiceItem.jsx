
import classes from './ServiceItem.module.css'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { cx } from '../../../Utils/classnames'
import arrow from '../../../Assets/icons/arrow_downward.svg'

const ServiceItem = (props) => {
    const { service, className } = props

    const { t } = useTranslation()

    return(
        <div className={cx(classes.main, className)}>
            <img src={service.img} alt="service"/>
            <div className={classes.info}>
                <div className={classes.title}>
                    <div className={classes.line}/>
                    <h3>{service.title}</h3>
                </div>
                <p>{service.description}</p>
                <NavLink to={`/services/${service._id}`}>
                    {t("services.service.link")}
                    <img src={arrow} alt="arrow"/>
                </NavLink>
            </div>
        </div>
    )
}

export default ServiceItem