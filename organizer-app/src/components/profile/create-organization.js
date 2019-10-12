import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HpiLogo from './hpi-logo.png'
import { makeStyles } from '@material-ui/core/styles';
import { Fab, IconButton, Button } from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

class CreateOrganization extends Component {
    state = {
        organizationName: "HPI Poland",
        organizationNameEditState: false,
        organizationDescription: "blah blah",
        organizationDescriptionEditState: false,
        organizationLogo: "path-to-logo",
        organizationLogoEditState: false,
    }

    saveOrganizationName = (e) => {

        this.setState({
            ...this.state,
            organizationName: e.target.organizationName.value,
            organizationNameEditState: false,
        })
        e.preventDefault();
    }

    saveOrganizationDescription = (e) => {

        this.setState({
            ...this.state,
            organizationDescription: e.target.organizationDescription.value,
            organizationDescriptionEditState: false
        })
        e.preventDefault();
    }

    saveOrganizationLogo = (e) => {

        this.setState({
            ...this.state,
            organizationLogo: "path-to-logo",
            organizationLogoEditState: false
        })
        e.preventDefault();
    }

    enableEditOrganizationName = () => {
        this.setState({
            ...this.state,
            organizationNameEditState: true,
        })
    }

    enableEditOrganizationDescription = () => {
        this.setState({
            ...this.state,
            organizationDescriptionEditState: true,
        })
    }

    enableEditLogo = () => {
        this.setState({
            ...this.state,
            organizationLogoEditState: true,
        })
    }

    render() {

        const orgName = (this.state.organizationNameEditState) ? (
            <form onSubmit={(e) => this.saveOrganizationName(e)}>
                <input type="text" name="organizationName" defaultValue={this.state.organizationName} />
                <button type="submit">Save</button>
            </form>
        ) : (
                <h1>{this.state.organizationName} <IconButton onClick={this.enableEditOrganizationName}><EditIcon /></IconButton></h1>
            );

        const description = (this.state.organizationDescriptionEditState) ? (
            <form onSubmit={(e) => this.saveOrganizationDescription(e)}>
                <textarea name="organizationDescription" defaultValue={this.state.organizationDescription} />
                <button type="submit">Save</button>
            </form>
        ) : (
                <div>
                    <IconButton onClick={this.enableEditOrganizationDescription}><EditIcon /></IconButton>
                    <p>{this.state.organizationDescription}</p>
                </div>
            );

        const organizationLogo = (this.organizationLogoEditState) ? 
            (
                <form onSubmit={(e) => this.saveOrganizationLogo(e)}>
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <img src={HpiLogo} alt="organization logo" />
                    <IconButton onClick={this.enableEditLogo}><EditIcon /></IconButton>
                </div>

            );

        return (
            <div className="profile container">
                <div className="row">
                    {orgName}
                </div>
                <div className="row">
                    <div className="col s12 m6">
                        {organizationLogo}
                    </div>
                    <div className="col s12 m5 m-offset=1">
                        {description}
                    </div>
                </div>
                <div className="profile">
                    <h3>Nadchodzące wydarzenia</h3>
                    <ul>
                        <li className="event card">
                            <div className="title orange darken-2">
                                <h5 className="orange darken-2">Eliminacje HPI Venture, Wrzesień</h5>
                            </div>
                            <div className="content">
                                <h6 className="grey-text">2019-09-14 - 2019-09-15</h6>
                                <p>Zaparaszamy na eliminacje Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae, praesentium vel maiores eligendi doloribus excepturi explicabo neque dolorem quis earum velit in eos ex iusto, est ad adipisci fugit!</p>
                            </div>
                        </li>
                        <li className="event card">
                            <div className="title orange darken-2">
                                <h5 className="orange darken-2">Eliminacje HPI Venture, Wrzesień</h5>
                            </div>
                            <div className="content">
                                <h6 className="grey-text">2019-09-14 - 2019-09-15</h6>
                                <p>Zaparaszamy na eliminacje Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae, praesentium vel maiores eligendi doloribus excepturi explicabo neque dolorem quis earum velit in eos ex iusto, est ad adipisci fugit!</p>
                            </div>
                        </li>
                        <li className="event card">
                            <div className="title orange darken-2">
                                <h5 className="orange darken-2">Eliminacje HPI Venture, Wrzesień</h5>
                            </div>
                            <div className="content">
                                <h6 className="grey-text">2019-09-14 - 2019-09-15</h6>
                                <p>Zaparaszamy na eliminacje Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde molestiae, praesentium vel maiores eligendi doloribus excepturi explicabo neque dolorem quis earum velit in eos ex iusto, est ad adipisci fugit!</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Add new event goes here */}

                <Fab color="secondary" aria-label="edit" className="float">
                    <AddIcon />
                </Fab>
            </div>

        )
    }
}



export default CreateOrganization;