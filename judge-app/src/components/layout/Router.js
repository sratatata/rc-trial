import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './Navbar';
import Home from '../home/Home';
import EventDashboard from '../events/EventDashboard';
import OsDetails from '../os/OsDetail';
import ScoreSheet from '../scoring';

const Router = (props) => {
    return (
    <BrowserRouter>
        <div class="App">
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/events/:id' component={EventDashboard} />
                <Route path='/os/continue/:id' component={OsDetails} />
                <Route path='/os/start/:id' component={OsDetails} />
                <Route path='/os/finish/:id' component={OsDetails} />
                <Route path='/scoresheet/:id' component={ScoreSheet} />
            </Switch>
        </div>
     </BrowserRouter>
    );
}

export default Router;