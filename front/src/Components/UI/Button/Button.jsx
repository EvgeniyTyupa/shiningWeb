import { Button } from '@material-ui/core'
import { cx } from '../../../Utils/classnames'
import classes from './Button.module.css'

const CustomButton = (props) => {
    return(
        <Button 
            className={cx(classes.main, props.className)} 
            onClick={props.action}
            type={props.type}
        >
            {props.text}
        </Button>
    )
}

export default CustomButton