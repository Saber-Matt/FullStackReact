import { Component } from 'react';
import React from 'react';
import WritingContainer from '../../containers/WritingContainer.jsx;'
import { BrowerRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom.jsx';
import Header from 'Header.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <navLink>
          <Header />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/prompts"></Link>
            </li>
          </ul>
        </navLink>
        <Switch>
          <Route path="/" exact={true}
            render={routerProps => (
              <WritingContainer {...routerProps}/>
            )}
          />
          <Route path="/promts"
            render={routerProps => (
              <div>Implement a page for id {routerProps.match.params.id}</div>
            )}
          />

          <Redirect to="/" />

        </Switch>
      </div>
    </Router>);
}
