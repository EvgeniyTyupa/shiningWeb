import { connect } from "react-redux"
import Preloader from "../../../Components/Common/Preloader/Preloader"
import { login } from "../../../Redux/adminReducer"
import Login from "./Login"
import { Redirect } from "react-router-dom"

const LoginContainer = (props) => {

    return(
        <>
            {props.isAuth && <Redirect to="/admin"/>}
            {props.isFetching && <Preloader/>}
            <Login login={props.login}/>
        </>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching,
    isAuth: state.admin.isAuth
})

export default connect(mapStateToProps, {
    login
})(LoginContainer)