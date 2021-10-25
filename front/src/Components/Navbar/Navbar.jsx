
import PhoneIcon from '../Icons/PhoneIcon'
import classes from './Navbar.module.css'
import { useSocialItems } from './useSoicalItems'
import { makeStyles, MenuItem, TextField } from "@material-ui/core"
import { useTranslation } from "react-i18next";
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/icons/logo.svg'
import { cx } from '../../Utils/classnames';
import Social from '../Social/Social';

import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

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

const Navbar = (props) => {
    const { refArray } = props

    console.log(refArray)

    const { t, i18n } = useTranslation()

    const material = useStyles()

    const handleLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    useEffect(() => {
        Aos.init({ duration: 500 })
    }, [])

    const handleScroll = (ref) => {
        ref.current.scrollIntoView()
    }

    return(
        <nav className={classes.main} data-aos="fade-down">
            <div className={classes.top}>
                <div className={classes.side}>
                    <a href="tel:+380507654321">
                        <PhoneIcon/>
                        <span>+380 (50) 756-43-21</span>
                    </a>
                </div>
                <div className={classes.side}>
                    <Social/>
                    <TextField classes={material} select onChange={handleLanguage} defaultValue="ru">
                        <MenuItem value="ru">RU</MenuItem>
                        <MenuItem value="ua">UA</MenuItem>
                        <MenuItem value="en">EN</MenuItem>
                    </TextField>
                </div>
            </div>
            <div className={classes.bot}>
                <div className={cx(classes.side, classes.botContainer)}>
                    <div className={classes.menuItem}>
                        {/* <NavLink exact to={"/"} activeClassName={classes.active}>{t("navbar.main")}</NavLink> */}
                        <button onClick={() => handleScroll(refArray[0])}>Главная</button>
                    </div>
                    <div className={classes.menuItem}>
                        {/* <NavLink to={"/services"} activeClassName={classes.active}>{t("navbar.services")}</NavLink> */}
                        <button onClick={() => handleScroll(refArray[1])}>О студии</button>
                    </div>
                    <div className={classes.menuItem}>
                        {/* <NavLink to={"/news"} activeClassName={classes.active}>{t("navbar.news")}</NavLink> */}
                        <button onClick={() => handleScroll(refArray[2])}>Релизы</button>
                    </div>
                    {/* <div className={classes.menuItem}>
                        <NavLink to={"/artists"} activeClassName={classes.active}>{t("navbar.artists")}</NavLink>
                    </div> */}
                </div>
                <div className={classes.logoContainer}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={cx(classes.side, classes.botContainer)}>
                    <div className={classes.menuItem}>
                        {/* <NavLink to={"/label"} activeClassName={classes.active}>{t("navbar.label")}</NavLink> */}
                        <button onClick={() => handleScroll(refArray[3])}>Отзывы</button>
                    </div>
                    <div className={classes.menuItem}>
                        {/* <NavLink to={"/about"} activeClassName={classes.active}>{t("navbar.about")}</NavLink> */}
                        <button onClick={() => handleScroll(refArray[4])}>Контакты</button>
                    </div>
                    <div className={classes.menuItem}>
                        {/* <NavLink to={"/contacts"} activeClassName={classes.active}>{t("navbar.contacts")}</NavLink> */}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar