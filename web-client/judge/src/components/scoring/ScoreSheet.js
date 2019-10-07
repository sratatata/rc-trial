import React, { Component } from 'react';

class ScoreSheet extends Component {
    render() {
        return (
            <div className="container">
                <h1>Scoring Board for Gniewko</h1>

                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <a class="waves-effect waves-light btn col s9">Cofnięcie<i class="material-icons right">arrow_back</i></a>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <a class="waves-effect waves-light btn col s9">Dotknięcie<i class="material-icons right">flag</i></a>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <a class="waves-effect waves-light btn col s9">Skoszenie<i class="material-icons right">undo</i></a>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <a class="waves-effect waves-light btn col s9">Uzycie wyposazenia<i class="material-icons right">flash_on</i></a>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <a class="waves-effect waves-light btn col s9">Podniesienie modelu<i class="material-icons right">pan_tool</i></a>
                </div>
                <div class="row">
                    <div class="col s3"><span className="counter">0</span>x<span className="points">0</span>=<span className="score">0</span></div>
                    <a class="waves-effect waves-light btn col s9">Pominięcie bramki<i class="material-icons right">location_off</i></a>
                </div>
                <div class="row">
                    <a class="waves-effect waves-light btn col s12">Zakończ i przejdź dalej<i class="material-icons left">assignment_turned_in</i></a>
                </div>
            </div>
        )
    }
}

export default ScoreSheet;