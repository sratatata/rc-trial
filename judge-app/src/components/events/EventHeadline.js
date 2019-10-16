import React from 'react';
import SmallOrganizationWidget from '../organization/SmallOrganizationWidget'

const EventHeadline = ({title, content, widget}) => {
    return (
        <div className="row">
            <div className="col s12 m6">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
            <div className="col s12 m6">
                <SmallOrganizationWidget name={widget.name} logo={widget.logo} />
            </div>
        </div>
    )
}

export default EventHeadline;