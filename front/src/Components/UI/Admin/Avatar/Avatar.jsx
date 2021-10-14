import classes from './Avatar.module.css'
import PersonIcon from '@mui/icons-material/Person';
import { cx } from '../../../../Utils/classnames';


const Avatar = (props) => {
    const { username, avatarClassName } = props
    return(
        <div className={classes.main}>
            <div className={cx(classes.circle, avatarClassName)}>
                <PersonIcon/>
            </div>
            <span>{username}</span>
        </div>
    )
}

export default Avatar