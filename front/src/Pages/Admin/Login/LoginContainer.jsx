import { connect } from "react-redux"
import Preloader from "../../../Components/Common/Preloader/Preloader"
import { login } from "../../../Redux/adminReducer"
import Login from "./Login"

const LoginContainer = (props) => {

    return(
        <>
            {props.isFetching && <Preloader/>}
            <Login login={props.login}/>
        </>
    )
}

let mapStateToProps = (state) => ({
    isFetching: state.common.isFetching
})

export default connect(mapStateToProps, {
    login
})(LoginContainer)