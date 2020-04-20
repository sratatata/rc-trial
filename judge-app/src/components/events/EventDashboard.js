import React from 'react';
import { array, object } from "prop-types";

import EventHeadline from './EventHeadline';
import OsList from '../os/OsList';
import NotificationDetails from '../notifications/NotificationDetails';
import HpiLogo from '../../assets/hpi-logo.png';

const EventDashboard = () => {
    
    const hpiWidget = { name: "HPI Poland", logo: HpiLogo }
    const eventHeadline = {
        title: "Hapejowo Wrzesień 2019",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptate atque unde eos blanditiis at nihil, numquam amet ipsum, quos nostrum nulla error optio rem voluptatum vitae ad odio assumenda?",
        widget: hpiWidget
    }
    const specialPart = [{
        title: "Odcinek Specjalny: 1",
        id: 1,
        players: [
            { 
                id: 1, 
                name: "Gniewko", 
                number: 142 
            }, 
            { name: "Peka", number: 12, id: 21 },
            { name: "Dupa Jaś", number: 66, id: 0}
        ]
    }]
    const notificationList = [
        { author: "Wojtek", date: new Date(), message: "Dodałem nowy odcinek specjalny w grupie <span>A</span>"}
    ]
    return (
        <div className="container">
            <EventHeadline key={eventHeadline.title} title={eventHeadline.title} content={eventHeadline.content} widget={eventHeadline.widget} />
            <div className="row">
                <div className="col s12 m6">
                    <h5>Lista odcinków specjalnych</h5>
                    {specialPart && specialPart.map( (os) => {
                        return <OsList key={os.id} id={os.id} title={os.title} players={os.players} />    
                    })}
                </div>
                <div className="col s12 m6">
                    <h5>Powiadomienia</h5>
                    {notificationList && notificationList.map(notif => {
                        return <NotificationDetails key={notif.date} author={notif.author} date={notif.date} message={notif.message}/>
                    })}
                </div>
            </div>
        </div>
    )
    
}

EventDashboard.propTypes = {
    hpiWidget: object.isRequired,
    eventHeadline: object.isRequired,
    footer: object.isRequired,
    specialPart: object.isRequired,
    notificationList: array
};
export default EventDashboard