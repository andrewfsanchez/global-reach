import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { UserData } from './requestLib/user'
import { CampaignData } from './requestLib/campaign'

import Navigation from './component/Navigation'
import Home from './pages/Home'
import Login from './pages/Login'

import * as serviceWorker from './serviceWorker';

const DEFAULT_USER_DATA: UserData = {
  loggedIn: false,
  email: null,
  name: null,
  phone: null,
}

const MainState = () => {
  const [userData, setUserData] = useState<UserData>(DEFAULT_USER_DATA)
  const { loggedIn } = userData

  return (
    <Router>
      <Navigation loggedIn={loggedIn} />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="/:cid" component={Home} />
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <MainState />
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
