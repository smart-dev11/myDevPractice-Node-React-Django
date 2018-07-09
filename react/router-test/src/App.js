import React from 'react';
import { Route, Link, BrowserRouter as Router} from "react-router-dom";

//import './App.css';

const App = () => (
  <Router>
    <div>
      <div className="header">
        <Link to="/" className="menu">Home</Link>
        <Link to="/companies" className="menu">Companies</Link>
      </div>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/companies" component={Companies} />
      </div>
    </div>
  </Router>
)

const Home = () =>(
  <div>
    <h2> This is Home Page </h2>
  </div>
)

const Companies = ({ match }) =>(
  <div>
    <div className="nav">
      <ul className="nav-list">
        <li>
          <Link to={`${match.url}/samsung`} className="nav-link">
            Samsung
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/apple`} className="nav-link">
            Apple
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/facebook`} className="nav-link">
            Facebook
          </Link>
        </li>
      </ul>
    </div>

    <Route path={`${match.url}/:topicId`} component={ Topic } />
    <Route exact path={match.url} render={() =>(
      <h3 className="content">Please select a topic.</h3>
    )}/>

  </div>
)

const Topic = ({ match }) => (
  <div className="content">
    <h3>This is {match.params.topicId} page</h3>
  </div>
)

export default App;
