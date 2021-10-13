import { connect } from "react-redux"
import { me } from "../../../Redux/adminReducer"
import { useEffect } from "react"
import { Redirect } from "react-router-dom"

const ProtectedRoute = ({ Component, isAuth, isStartData, me}) => {
    useEffect(() => {
        if(localStorage.usertoken && !isStartData){
            me()
        }
    }, [])

    return(
        isAuth ? <Component/>
        : <Redirect to="/login"/>
    )
}

let mapStateToProps = (state) => ({
    isStartData: state.admin.isStartData,
    isAuth: state.admin.isAuth
})

export default connect(mapStateToProps, {
    me
})(ProtectedRoute)