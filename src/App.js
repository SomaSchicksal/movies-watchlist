
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Header} from "./Header"
import {Watchlist} from "./Watchlist"
import {Watched} from "./Watched"
import {Add} from "./Add"
import "./lib/font-awesome/css/all.min.css"

import {GlobalProvider} from "./context/GlobalState";
import Details from './Details';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Watchlist />
          </Route>

          <Route exact path="/watched">
            <Watched />
          </Route>

          <Route exact path="/add">
            <Add />
          </Route>

          <Route exact path="/details/:id">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
    
  
}

export default App;
