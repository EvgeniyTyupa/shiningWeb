import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import MainContainer from './Pages/Main/MainContainer';
import Footer from './Components/Footer/Footer';
import { connect } from 'react-redux';
import MailSuccess from './Components/Modals/MailSuccess/MailSuccess';
import ProtectedRoute from './Components/Common/ProtectedRoute/ProtectedRoute';
import { useEffect, useState } from 'react';
import LoginContainer from './Pages/Admin/Login/LoginContainer';
import Admin from './Pages/Admin/Admin/Admin';
import { setStartUserUrl } from './Redux/commonReducer';

const App = (props) => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    if(!window.location.pathname.includes("admin") && !window.location.pathname.includes("login")) {
      setIsAdmin(false)
    }else {
      setIsAdmin(true)
    }
  }, [window.location.pathname])

  useEffect(() => {
    props.setStartUserUrl(window.location.href)
  }, [])


  return(
    <BrowserRouter>
      <div className="main">
        {/* {!isAdmin && <Navbar/>} */}
        <div className="content">
          {props.isMailSended && <MailSuccess/>}
          <Switch>
            <Route path="/" exact render={() => <MainContainer/>}/>

            <Route path="/login" render={() => <LoginContainer/>}/>
            <Route path="/admin" exact render={() => <ProtectedRoute Component={Admin}/>}/>
          </Switch>
        </div>
        {!isAdmin && <Footer/>}
      </div>
    </BrowserRouter>
  )
}

let mapStateToProps = (state) => ({
  isMailSended: state.common.isMailSended
})

export default connect(mapStateToProps, {
  setStartUserUrl
})(App);
