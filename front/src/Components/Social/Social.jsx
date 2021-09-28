import React from 'react'
import { useSocialItems } from '../Navbar/useSoicalItems'
import classes from './Social.module.css'

const Social = (props) => {
    const socialItems = useSocialItems()

    return(
        <div className={classes.socialItems}>
            {socialItems.map((item, index) => (
                <div className={classes.socialItem} key={`menu${index}`}>
                    <a href={item.href} rel="noopener noreferrer" target="_blank">
                        {item.icon}
                    </a>
                </div>
            ))}
        </div>
    )
}

export default Social