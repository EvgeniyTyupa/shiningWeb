
import Social from '../Social/Social'
import classes from './Footer.module.css'
import logo from '../../Assets/icons/logo.svg'
import { cx } from '../../Utils/classnames'
import { makeStyles, MenuItem, TextField } from "@material-ui/core"
import { useTranslation } from 'react-i18next'
import LocationIcon from '../Icons/LocationIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import MailIcon from '../Icons/MailIcon'
import moment from "moment"

const useStyles = makeStyles({
    root: {
        color: "white",
        position: 'relative',
        top: '1px',
        paddingTop: "0",
        '& .MuiInputBase-root': {
            color: 'white',
            fontSize: "19px",
            fontWeight: 300,
            fontFamily: 'Helvetica',
           
        },
        '& .MuiInput-underline:before':{
            borderBottom: 0
        },
        '& .MuiInput-underline:after':{
            borderBottom: "none"
        },
        '& .MuiSelect-select': {
            paddingBottom: 0,
            paddingTop: 0,
            color: 'white'
        },
        '& .MuiSelect-selectMenu': {
            minHeight: 0
        },
        '& .MuiSelect-icon': {
            color: 'white'
        }
    }
})

const Footer = (props) => {
    const { t, i18n } = useTranslation()

    const year = moment().year()

    const material = useStyles()

    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return(
        <div className={classes.main}>
            <div className={classes.top}>
                <div className={classes.side}></div>
                <img src={logo} alt="logo" className={classes.logo}/>
                <div className={cx(classes.side, classes.info)}>
                    {/* <TextField select classes={material} onChange={handleLanguage} defaultValue="ru">
                        <MenuItem value="ru">RU</MenuItem>
                        <MenuItem value="ua">UA</MenuItem>
                        <MenuItem value="en">EN</MenuItem>
                    </TextField> */}
                    <div className={classes.field}>
                        <LocationIcon/>
                        <span>{t("footer.location")}</span>
                    </div>
                    <div className={classes.field}>
                        <PhoneIcon/>
                        <a href="tel:+380507654321">+380 (50) 765-43-21</a>
                    </div>
                    <div className={classes.field}>
                        <MailIcon/>
                        <a href="mailto:studio@shmrec.com">studio@shmrec.com</a>
                    </div>
                    <div className={classes.links}>
                        <Social/>
                    </div>
                </div>
            </div>
           <div className={classes.bot}>
                <span>© 2016 - {year}</span>
           </div>
        </div>
    )
}

export default Footer