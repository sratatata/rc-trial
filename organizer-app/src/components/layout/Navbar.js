import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
           <Link to='/' className="brand-logo left">RC-Trial Score </Link>
            <ul id="nav-mobile" className="right">
                <li><Link to='/organization-list'>Organizations</Link></li>
                <li><Link to='/organization/create'>Create new organization</Link></li>
                <li><Link to='/organization/hpi-poland/events/createnew'>Create new event</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;