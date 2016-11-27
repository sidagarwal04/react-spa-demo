import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, IndexLink, Link} from "react-router";

import App from './src/App.jsx';
import Home from './src/Home.jsx';
import About from './src/About.jsx';
import MI1 from './src/MI1.jsx';
import MI2 from './src/MI2.jsx';
import Github from './src/Github.jsx';
import Contact from './src/Contact.jsx';
import FAQ from './src/FAQ.jsx';


ReactDOM.render(
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="about" component={About}/>
          <Route path="mi1" component={MI1}/>
          <Route path="mi2" component={MI2}/>	
          <Route path="github" component={Github}/>
          <Route path="contact" component={Contact}/>
          <Route path="faq" component={FAQ}/>
        </Route>
      </Router>,
      document.getElementById('app')
    );