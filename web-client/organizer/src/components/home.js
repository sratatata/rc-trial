import React from 'react';
import EventsList from './event/EventsList';

const Home = () => {
    return (
        <div className="container">
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita praesentium obcaecati ab commodi molestias minima eligendi, architecto maiores alias dignissimos consequatur explicabo necessitatibus earum quisquam perspiciatis delectus hic tenetur ut.</p>
            <h2>Incoming events</h2>
            <EventsList/>
        </div>
    )
}

export default Home;