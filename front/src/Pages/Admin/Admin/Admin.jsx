import { useState } from 'react'
import { connect } from 'react-redux'
import DashboardContainer from '../../../Components/Admin/Dashboard/DashboardContainer'
import MusicContainer from '../../../Components/Admin/Music/MusicContainer'
import Preloader from '../../../Components/Common/Preloader/Preloader'
import AdminLayout from '../../../Components/UI/Admin/AdminLayout/AdminLayout'
import { logout } from '../../../Redux/adminReducer'
import classes from './Admin.module.css'

const Admin = (props) => {
    const { admin, isFetching, logout } = props
    const [currentTab, setCurrentTab] = useState(0)

    const tabs = [<DashboardContainer/>, <></>, <MusicContainer/>]

    return(
        <div className={classes.main}>
            {isFetching ? <Preloader/> :
            <AdminLayout 
                admin={admin}
                logout={logout}
                setCurrentTab={setCurrentTab}
                currentTab={currentTab}
            >
                {tabs[currentTab]}
            </AdminLayout>}
        </div>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    admin: state.admin.admin
})

export default connect(mapStateToProps, {
    logout
})(Admin)