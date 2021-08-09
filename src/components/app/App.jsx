import React from 'react';
import { BrowerRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom.jsx';
import PickMeUp from 'PickMeUp.jsx';
import Auth from 'Auth.jsx.jsx';
import Home from 'Home.jsx';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pickmeups"></Link>
            </li>
            <Link to="/auth">Static Up/Login</Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/pickmeups">
            <PickMeUp />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>);
}
