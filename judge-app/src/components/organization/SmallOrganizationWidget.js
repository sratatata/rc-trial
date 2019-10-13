import React from 'react';

const SmallOrganizationWidget = ({name, logo}) => {
    return(
        <div className="container small-organization-widget">
            <h6>{name}</h6>
            <img src={logo} alt="org-logo"/>
        </div>
    )
}

export default SmallOrganizationWidget;
