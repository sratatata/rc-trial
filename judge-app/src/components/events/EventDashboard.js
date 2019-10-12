import React from 'react';
import SmallOrganizationWidget from '../organization/SmallOrganizationWieget'
import OsList from '../os/OsList';
import NotificationsList from '../notifications/NotificationsList'
import HpiLogo from '../../hpi-logo.png';

const EventDashboard = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <h1>Hapejowo Wrzesień 2019</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate atque unde eos blanditiis at nihil, numquam amet ipsum, quos nostrum nulla error optio rem voluptatum vitae ad odio assumenda?</p>
                </div>
                <div className="col s12 m6">
                    <SmallOrganizationWidget name="HPI Poland" logo={HpiLogo}/>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m6">
                    <h5>Lista odcinków specjalnych</h5>
                    <OsList/>
                </div>
                <div className="col s12 m6">
                    <h5>Powiadomienia</h5>
                    <NotificationsList/>
                </div>
            </div>
        </div>
    )
}

export default EventDashboard