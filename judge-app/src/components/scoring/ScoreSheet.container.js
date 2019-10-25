import React from 'react';
import { Link } from 'react-router-dom';

const ScoreSheet = ({player, scoreboard, sheet}) => {
    const {reversalInGate, touchingFlag, overturningFlag, usingHoist, fixingModel, special} = scoreboard;
    debugger;
    return (
        <div className="container">
            <h1>Scoring Board for Gniewko</h1>

            <div className="row">
                <div className="col s3"><span className="counter">{reversalInGate.score}</span>x<span className="points">{reversalInGate.value}</span>=<span className="score">{reversalInGate.score * reversalInGate.value}</span></div>
                <Link className="waves-effect waves-light btn col s9" to="#">Cofnięcie<i className="material-icons right">arrow_back</i></Link>
            </div>
            <div className="row">
                <div className="col s3"><span className="counter">{touchingFlag.score}</span>x<span className="points">{touchingFlag.value}</span>=<span className="score">{touchingFlag.score * touchingFlag.value}</span></div>
                <Link className="waves-effect waves-light btn col s9" to="#">Dotknięcie<i className="material-icons right">flag</i></Link>
            </div>
            <div className="row">
                <div className="col s3"><span className="counter">{overturningFlag.score}</span>x<span className="points">{overturningFlag.value}</span>=<span className="score">{overturningFlag.score * overturningFlag.value}</span></div>
                <Link className="waves-effect waves-light btn col s9" to="#">Skoszenie<i className="material-icons right">undo</i></Link>
            </div>
            <div className="row">
                <div className="col s3"><span className="counter">{usingHoist.score}</span>x<span className="points">{usingHoist.value}</span>=<span className="score">{usingHoist.score * usingHoist.value}</span></div>
                <Link className="waves-effect waves-light btn col s9" to="#">Użycie wyposażenia<i className="material-icons right">flash_on</i></Link>
            </div>
            <div className="row">
                <div className="col s3"><span className="counter">{fixingModel.score}</span>x<span className="points">{fixingModel.value}</span>=<span className="score">{fixingModel.score * fixingModel.value}</span></div>
                <Link className="waves-effect waves-light btn col s9" to="#">Podniesienie modelu<i className="material-icons right">pan_tool</i></Link>
            </div>
            <div className="row">
                <div className="col s3"><span className="counter">{special.score}</span>x<span className="points">{special.value}</span>=<span className="score">{special.score * special.value}</span></div>
                <Link className="waves-effect waves-light btn col s9" to="#">Pominięcie bramki<i className="material-icons right">location_off</i></Link>
            </div>
            <div className="row">
                <Link className="waves-effect waves-light btn col s12" to="#">Zakończ i przejdź dalej<i className="material-icons left">assignment_turned_in</i></Link>
            </div>
        </div>
    )
}

export default ScoreSheet;