import { useEffect } from "react";
import { IconButton } from "@material-ui/core"
import classes from "./ModalLayout.module.css"
import CloseIcon from '@mui/icons-material/Close';

import Aos from 'aos'
import 'aos/dist/aos.css'

const ModalLayout = (props) => {
    useEffect(() => {
        Aos.init({ duration: 300 })
    }, [])

    return(
        <div className={classes.main} data-aos="zoom-in">
            <div className={classes.header}>
                <IconButton onClick={props.onClose}>
                    <CloseIcon/>
                </IconButton>
            </div>
            {props.children}
        </div>
    )
}

export default ModalLayout