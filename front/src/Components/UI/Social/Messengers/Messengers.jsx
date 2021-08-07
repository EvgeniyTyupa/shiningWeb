import { useTranslation } from 'react-i18next'
import TelegramIcon from '../../../Icons/TelegramIcon'
import ViberIcon from '../../../Icons/ViberIcon'
import WhatsAppIcon from '../../../Icons/WhatsAppIcon'
import classes from './Messengers.module.css'

const Messengers = (props) => {
    const { t } = useTranslation()

    return(
        <div className={classes.main}>
            <label>{t("forms.order.label")}</label>
            <div className={classes.line}>
                <a href="" rel="noopener noreferrer" target="_blank">
                    <ViberIcon/>
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                    <TelegramIcon/>
                </a>
                <a href="" rel="noopener noreferrer" target="_blank">
                    <WhatsAppIcon/>
                </a>
            </div>
        </div>
    )
}

export default Messengers