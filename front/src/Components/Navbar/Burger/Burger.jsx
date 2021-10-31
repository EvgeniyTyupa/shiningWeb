import classes from './Burger.module.css'
import { Button, Drawer, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Burger = (props) => {
    const { refArray } = props

    const anchor = 'right'

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleScroll = (index) => {
        setTimeout(function(){handleOpen()}, 800)
        refArray[index].current.scrollIntoView()
    }

    return(
        <div className={classes.main}>
            <div className={classes.burger}>
                <IconButton onClick={handleOpen}>
                    <MenuIcon/>
                </IconButton>
            </div>
            <Drawer anchor={anchor} open={isOpen} onClose={handleOpen} className={classes.body} classes={{ paper: classes.body }}>
                <IconButton onClick={handleOpen} className={classes.closeBut}>
                    <CloseIcon/>
                </IconButton>
                <div className={classes.menuItems}>
                    <button onClick={() => handleScroll(0)}>Головна</button>
                    <button onClick={() => handleScroll(1)}>Про нас</button>
                    <button onClick={() => handleScroll(2)}>Релізи</button>
                    <button onClick={() => handleScroll(3)}>Відгуки</button>
                    <button onClick={() => handleScroll(4)}>Контакти</button>
                </div>
                {/* <div className={classes.footer}>
                    <Button onClick={() => handleChangeLanguage("ru")} className={props.currentLanguage === "ru" ? classes.activeLang : undefined}>RU</Button>
                    <Button onClick={() => handleChangeLanguage("ua")} className={props.currentLanguage === "ua" ? classes.activeLang : undefined}>UA</Button>
                </div> */}
            </Drawer>
        </div>
    )
}

export default Burger