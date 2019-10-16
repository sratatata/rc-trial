import React from 'react';
import moment from 'moment'

const NotificationDetails = ({author, rawDate, message}) => {
    const date = (rawDate instanceof Date) ? rawDate : new Date(rawDate);
    return(
        <ul>
            <li>
                <h6>{author} napisał {moment(date).fromNow()}</h6> 
                <p>{message}</p>
            </li>
        </ul>
    )
}

export default NotificationDetails