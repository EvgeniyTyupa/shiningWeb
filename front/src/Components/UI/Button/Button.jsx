import { Button } from '@material-ui/core'
import { cx } from '../../../Utils/classnames'
import classes from './Button.module.css'

const CustomButton = (props) => {
    const { className, action, type = "button", text } = props

    return(
        <Button 
            className={cx(classes.main, className)} 
            onClick={action}
            type={type}
        >
            {text}
        </Button>
    )
}

export default CustomButton