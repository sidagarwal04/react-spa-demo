import React from 'react';
import {Router, Route, IndexRoute, IndexLink, Link} from "react-router";

var App = React.createClass({
  render: function() {
    return (
   
      <div id="menuwrapper">
        <h1>&lt;Company Logo&gt;</h1>
        <ul>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li className="dropdown"><Link to="/about" activeClassName="active">About</Link>
              <div className="dropdown-content">
                    <Link to="/mi1" activeClassName="active">Menu Item 1</Link>
                    <Link to="/mi2" activeClassName="active">Menu Item 2</Link> 
              </div>
          </li>  
          <li><Link to="/github" activeClassName="active">Github</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
          <li><Link to="/faq" activeClassName="active">FAQ</Link></li>
        </ul>
        <div className="content">
            {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;