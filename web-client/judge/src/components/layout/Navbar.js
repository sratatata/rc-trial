import React from "react";
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
           <Link to='/' className="brand-logo left">RC-Trial Score - Judge </Link>
            <ul id="nav-mobile" className="right">
                <li><Link to='/events/1'>Current event</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;