import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import Posts from "./components/Posts";
import About from "./components/About";

class App extends React.Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/posts" exact>Posts</Link>
          </li>
        </ul>
        <hr/>
        <Switch>
          <Route exact path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Posts} exact />
          <Route path="/posts/:postId" component={Post} />
        </Switch>
      </Router>
      
    );
  }
}

export default App;
