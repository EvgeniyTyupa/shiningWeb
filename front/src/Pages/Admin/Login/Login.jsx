import LoginForm from '../../../Components/Forms/LoginForm/LoginForm'
import classes from './Login.module.css'

const Login = (props) => {
    const { login } = props
    return(
        <div className={classes.main}>
            <LoginForm login={login}/>
        </div>
    )
}

export default Login