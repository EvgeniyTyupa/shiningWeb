import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import MainContainer from './Pages/Main/MainContainer';
import Footer from './Components/Footer/Footer';
import { connect } from 'react-redux';
import MailSuccess from './Components/Modals/MailSuccess/MailSuccess';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className="main">
        <Navbar/>
        <div className="content">
          {props.isMailSended && <MailSuccess/>}
          <Switch>
            <Route path="/" exact render={() => <MainContainer/>}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

let mapStateToProps = (state) => ({
  isMailSended: state.common.isMailSended
})

export default connect(mapStateToProps, {})(App);
