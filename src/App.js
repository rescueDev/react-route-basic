import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import TopHeadlines from "./components/TopHeadlines/TopHeadlines";
import Authors from "./components/Authors/Authors";
import Everything from "./components/Everything/Everything";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={TopHeadlines} />
          <Route path="/topnews" component={TopHeadlines} />
          <Route path="/allnews" component={Everything} />
          <Route path="/authors" component={Authors} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>;
};

export default App;
