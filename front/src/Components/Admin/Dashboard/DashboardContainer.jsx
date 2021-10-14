import { connect } from "react-redux"
import Preloader from "../../../Components/Common/Preloader/Preloader"
import Dashboard from "./Dashboard"

const DashboardContainer = (props) => {
    return(
        <>
            {props.isFetching ? <Preloader/> 
            : <Dashboard/>}
        </>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {})(DashboardContainer)