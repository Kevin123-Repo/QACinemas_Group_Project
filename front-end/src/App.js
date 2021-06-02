import './App.css';
import Homepage from './Components/Homepage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './Components/Header_Footer/NavBar';
import FooterBar from './Components/Header_Footer/FooterBar';
import OpeningTimes from './Components/OpeningTimes/OpeningTimes'
import GettingThere from './Components/Getting_There/GettingThere'
import Classifications from './Components/Classifications/Classifications';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/OpeningTimes">
            <OpeningTimes />
          </Route>
          <Route path="/GettingThere">
            <GettingThere />
          </Route>
          <Route path="/GettingThere">
            <GettingThere />
          </Route>
          <Route path="/Classifications">
            <Classifications />
          </Route>
        </Switch>
        <FooterBar />
      </Router>
    </>

  );
}

export default App;