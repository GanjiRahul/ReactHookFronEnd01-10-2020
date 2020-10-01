import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import User from './pages/user';
import Tasks from './pages/tasks';

function Routes() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/user" component={User} />
                    <Route path="/tasks" component={Tasks}  />
                </Switch>
            </Router>
        </div>
    );
}

export default Routes;
