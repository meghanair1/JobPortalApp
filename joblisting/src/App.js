import logo from './logo.svg';
import './App.css';

import JobListing from './component/JobListing'
import Registeration from './component/Registeration'
import Login from './component/Login'
import Protected from './component/Protected'
import Nav from './component/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">

      <Router>
        <Nav />

        <Switch>

          <Route path="/joblisting">

            <JobListing />
          </Route>

          <Route path="/">
            <Registeration />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
