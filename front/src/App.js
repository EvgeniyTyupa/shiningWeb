import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import MainContainer from './Pages/Main/MainContainer';

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
      </div>
    </BrowserRouter>
  )
}

export default App;
