import React from 'react';
import { Link } from 'react-router-dom';
import { array, number, string } from "prop-types";

const OsList = ({id, title, players}) => {
    return (
        <div className="container">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{title}</span>
                    <p>Zawodnicy</p>
                    <ul>
                        {players && players.map(player => {
                            return <li key={player.id}>{player.name}: {player.number}</li>
                        })}
                    </ul>
                </div>
                <div className="card-action">
                    <Link to={`/os/start/${id}`}>Start</Link>
                    <Link to={`/os/continue/${id}`}>Kontynuuj</Link>
                    <Link to={`/os/finish/${id}`}>Zamknij</Link>
                </div>
            </div>
        </div>
    );
}

OsList.propTypes = {
    id: number.isRequired, 
    title: string.isRequired, 
    players: array.isRequired
};

export default OsList;