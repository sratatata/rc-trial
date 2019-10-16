import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PlayerList extends Component {
    render() {
        return (
            <div className="container">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Gniewko: 232</span>
                        <p>Punkty</p>
                        <ul>
                            <li>Cofnięcia w bramce: <span>8 x 5 = 40</span></li>
                            <li>Dotknięte chorągiewki: <span>4 x 8 = 32</span></li>
                            <li>Przewrócenie chorągiewki: <span>1 x 20 = 20</span></li>
                            <li>Urzycie wyciągarki, trapów: <span>1 x 40 = 40</span></li>
                            <li>Naprawa, Przeniesienie modelu: <span>2 x 60 = 120</span></li>
                            <li>Punkty specjalne: <span>-20</span></li>
                        </ul>
                    </div>
                    <div class="card-action row">
                        <div className="col s1 l1">
                            <Link className="" to="/"><i class="material-icons ">arrow_back</i></Link>
                        </div>
                        <div className="col s1 l1">
                            <Link className="" to="/scoresheet/1"><i class="material-icons ">map</i></Link>
                        </div>
                        <div className="col s1 l1">
                            <Link className="" to="/"><i class="material-icons ">arrow_forward</i></Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PlayerList;