import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx'
import Profile from './containers/Profile.jsx'
import Home from './containers/Home.jsx'
import Login from './containers/Login.jsx'
import Signup from './containers/Signup.jsx'
import Search from './containers/Search.jsx'
import BusinessAdd from './containers/BusinessAdd.jsx'
import RequireAuth from './containers/RequireAuth.jsx'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';




const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="profile" component={RequireAuth(Profile)}/>
        <Route path="search" component={RequireAuth(Search)} />
        <Route path="add" component={RequireAuth(BusinessAdd)}/>
        {/*<Route path="business" component={RequireAuth()}*/}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);