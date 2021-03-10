import "./App.css";
import Leagues from "./components/Leagues/Leagues";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Leagues></Leagues>
        </Route>
        <Route path="/home">
          <Leagues></Leagues>
        </Route>
        <Route path="/league/:id">
          <LeagueDetail></LeagueDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
