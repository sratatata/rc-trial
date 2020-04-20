import React from 'react';
import { string } from "prop-types";

const SmallOrganizationWidget = ({name, logo}) => {
    return(
        <div className="container small-organization-widget">
            <h6>{name}</h6>
            <img src={logo} alt="org-logo"/>
        </div>
    )
}
SmallOrganizationWidget.propTypes = {
    name: string.isRequired,
    logo: string.isRequired
};

export default SmallOrganizationWidget;
