import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import MainContainer from './Pages/Main/MainContainer';
import Footer from './Components/Footer/Footer';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className="main">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route path="/" exact render={() => <MainContainer/>}/>
          </Switch>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App;
