# react-spa-demo
Demo SPA using React.JS and Node.JS for those getting started with react.js and react-router

[**Demo on Heroku**](https://react-spa-demo.herokuapp.com/)  
(Automatically deployed from this repository on travis build)

### Installation
#### Running the demo locally
1. Run `$ npm install` in the react-spa-demo/ directory
2. Start the server in react-spa-demo using `$ npm start`. Should open a port on 8080.
3. Navigate your browser to http://localhost:8080.

Tested using npm 3.10.5 and node 4.4.7 

### Purpose
Create a simple react.js single page application for beginners with drop-down menu items and improved css.

#### Layout
**Home page and top menu**

```
+---------------------------------------------------------------------------+
| Logo                                                 Account   Updates(5) |
| +----------+ +-----------+ +-------------+  +-------------+ +-----------+ |
| | Home     | | About     | | Github      |  | Contact     | | FAQ       | |
| +----------+ +-----------+ +-------------+  +-------------+ +-----------+ |
|              +-----------+                                                |
|              | MenuItem 1|                                                |
|              +-----------+                                                | 
|              +-----------+                                                |
|              | MenuItem 2|                                                |
|              +-----------+                                                | 
+---------------------------------------------------------------------------+
|  Homepage                                                                 |
|                                                                           |
|                            List of updates                                |
|                                                                           |
+---------------------------------------------------------------------------+
```

### Libraries
* [ReactJS](https://facebook.github.io/react/)
* [React-router](https://github.com/ReactTraining/react-router)
