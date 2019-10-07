import React from 'react'
import {Link} from 'react-router-dom'
const OsList = () => {
    return (
        <div className="container">
            <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                    <span class="card-title">Odcinek Specjalny: 1</span>
                    <p>Zawodnicy</p>
                    <ul>
                        <li>Gniewko: <span>142</span></li>
                        <li>Peka: <span>12</span></li>
                    </ul>
                </div>
                <div class="card-action">
                    <Link to="/os/1">Start</Link>
                    <a href="#">Kontynuuj</a>
                    <a href="#">Zamknij</a>
                </div>
            </div>
        </div>
    );
}

export default OsList;