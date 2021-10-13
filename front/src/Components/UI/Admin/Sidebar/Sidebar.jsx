import { useSidebarItems } from '../../../../Hooks/useSidebarItems'
import classes from './Sidebar.module.css'
import Avatar from '../Avatar/Avatar'

const Sidebar = (props) => {
    const items = useSidebarItems()
    return(
        <div className={classes.main}>
            <div className={classes.header}>
                <Avatar />
            </div>
        </div>
    )
}

export default Sidebar