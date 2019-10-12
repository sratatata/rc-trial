import React, {Component} from 'react';
import HpiLogo from './hpi-logo.png'
import RcTrialPl from './rc-trial-pl.jpeg'
import {Link} from 'react-router-dom'

class OrganizationsList extends Component {
    render(){
        return (
            <div className="profile-list container">
                <ul>
                    <li className="row">
                        <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={HpiLogo}/>
                                <span className="card-title">Hpi Polska</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/organization/hpi-poland">find events...</Link>
                            </div>
                        </div>
                        </div>
                    </li>
                    <li className="row">
                        <div className="col s12 m7">
                        <div className="card">
                            <div className="card-image">
                                <img src={RcTrialPl}/>
                                <span className="card-title">rc-trial.pl</span>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/organization/rc-trial-pl">find events...</Link>
                            </div>
                        </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        )
    }
}

export default OrganizationsList;