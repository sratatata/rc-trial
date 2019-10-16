import React, { Component } from 'react';
import HpiLogo from './hpi-logo.png'
import { makeStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import EventsList from '../event/EventsList';

class ProfileDashboard extends Component {

    render() {
        return (
            <div className="profile container">
                <div className="row">
                    <h1>Organization: HPI Poland</h1>
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        <img src={HpiLogo} alt="organization logo" />
                    </div>
                    <div className="col s12 m5 m-offset=1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ex a rem neque voluptatum similique ut dolores unde hic ea nesciunt quidem dolorum enim aspernatur earum voluptatem, quas quia perspiciatis.</p>
                    </div>
                </div>
                <div className="profile">
                    <h3>Nadchodzące wydarzenia</h3>
                    <EventsList />
                </div>
            </div>
        );
    }
}



export default ProfileDashboard;