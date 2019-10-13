import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class ScoreSheet extends Component {
    render() {
        return (
            <div className="container">
                <h1>Scoring Board for Gniewko</h1>

                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <Link className="waves-effect waves-light btn col s9" to="#">Cofnięcie<i class="material-icons right">arrow_back</i></Link>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <Link className="waves-effect waves-light btn col s9" to="#">Dotknięcie<i class="material-icons right">flag</i></Link>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <Link className="waves-effect waves-light btn col s9" to="#">Skoszenie<i class="material-icons right">undo</i></Link>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <Link className="waves-effect waves-light btn col s9" to="#">Uzycie wyposazenia<i class="material-icons right">flash_on</i></Link>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <Link className="waves-effect waves-light btn col s9" to="#">Podniesienie modelu<i class="material-icons right">pan_tool</i></Link>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <Link className="waves-effect waves-light btn col s9" to="#">Pominięcie bramki<i class="material-icons right">location_off</i></Link>
                </div>
                <div class="row">
                    <Link className="waves-effect waves-light btn col s12" to="#">Zakończ i przejdź dalej<i class="material-icons left">assignment_turned_in</i></Link>
                </div>
            </div>
        )
    }
}

export default ScoreSheet;