import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from './configStore';
import Homepage from './containers/Homepage';
// import Login from './containers/Login';
// import Loading from "./Loading";

const rootElement = document.getElementById('container');

// const HomePage = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./containers/HomePage.js').default);
//   }, 'HomePage');
// };

render(
  <Provider store={store}>
      <Router>
          <Homepage />
      </Router>
  </Provider>,
  rootElement,
);
