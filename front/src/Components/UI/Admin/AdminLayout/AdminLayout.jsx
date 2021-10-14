import Sidebar from '../Sidebar/Sidebar'
import classes from './AdminLayout.module.css'

const AdminLayout = (props) => {
    const { admin, logout, setCurrentTab, currentTab, children } = props

    return(
        <div className={classes.main}>
            <Sidebar 
                username={admin.username} 
                logout={logout} 
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            />
            <div className={classes.content}>
                <div className={classes.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout