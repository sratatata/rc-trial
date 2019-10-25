import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import EventDashboard from './components/events/EventDashboard';
import OsDetails from './components/os/OsDetail';
import ScoreSheet from './components/scoring';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/events/:id' component={EventDashboard} />
       <Route path='/os/:id' component={OsDetails} />
       <Route path='/scoresheet/:id' component={ScoreSheet} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
