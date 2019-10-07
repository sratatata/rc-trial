import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home';
import ProfileDashboard from './components/profile/profile-dashboard';
import OrganizationsList from './components/profile/organizationsList';
import Navbar from './components/layout/Navbar';
import CreateOrganization from './components/profile/create-organization';
import CreateEvent from './components/event/CreateEvent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/organization-list' component={OrganizationsList} />
       <Route exact path='/organization/create' component={CreateOrganization} />
       <Route path='/organization/:name/events/createnew' component={CreateEvent} />       
       <Route path='/organization/:name/edit' component={CreateOrganization} />       
       <Route path='/organization/:name' component={ProfileDashboard} />
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
