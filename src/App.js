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
        <Route path="/topnews" component={TopHeadlines} />
        <Route path="/allnews" component={Everything} />
        <Route path="/authors" component={Authors} />
      </div>
    </Router>
  );
}

export default App;
