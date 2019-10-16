import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    const eventList = [{ id: 'asdf', name: "Current event" }]
    return (
        <nav className="nav-wrapper grey darken-3">
            <Link to='/' className="brand-logo left">RC-Trial Score - Judge </Link>
            <ul id="nav-mobile" className="right">
                {eventList && eventList.map(ev => {
                    return <li key={ev.id}><Link to={`/events/${ev.id}`}>{ev.name}</Link></li>
                })}
            </ul>
        </nav>
    )
}
export default Navbar;