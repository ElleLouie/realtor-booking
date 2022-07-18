import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './nav';
import Projects from './projects';
import Packages from './packages';
import Book from './book';
import Home from './home';
// import ScrollToTop from './ScrollToTop';
const About = (props) => {
  return <div> All there is to know about me </div>;
};

const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <Router>
      <div className="page-container">
        {/* <ScrollToTop /> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/packages" component={Packages} />
          <Route exact path="/book" component={Book} />
          <Route component={FallBack} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
