import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Shared/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/appointment">
          <Appointment />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
