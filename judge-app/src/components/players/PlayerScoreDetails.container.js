import React from 'react';
import { Link } from 'react-router-dom';
import { number, object } from "prop-types";

const PlayerScoreDetails = ({player, scoreboard, scoreSheetId}) => {
    const {reversalInGate, touchingFlag, overturningFlag, usingHoist, fixingModel, special} = scoreboard;
    return (
    <div className="container">
        <div className="card blue-grey darken-1">
            <div className="card-content white-text">
                <span className="card-title">{player}: {scoreboard.total}</span>
                <p>Punkty</p>
                <ul>
                    <li>Cofnięcia w bramce: <span>{reversalInGate.score} x {reversalInGate.value} = {reversalInGate.score * reversalInGate.value}</span></li>
                    <li>Dotknięte chorągiewki: <span>{touchingFlag.score} x {touchingFlag.value} = {touchingFlag.score * touchingFlag.value}</span></li>
                    <li>Przewrócenie chorągiewki: <span>{overturningFlag.score} x {overturningFlag.value} = {overturningFlag.score * overturningFlag.value}</span></li>
                    <li>Użycie wyciągarki, trapów: <span>{usingHoist.score} x {usingHoist.value} = {usingHoist.score * usingHoist.value}</span></li>
                    <li>Naprawa, Przeniesienie modelu: <span>{fixingModel.score} x {fixingModel.value} = {fixingModel.score * fixingModel.value}</span></li>
                    <li>Punkty specjalne: <span>{special.score}</span></li>
                </ul>
            </div>
            <div className="card-action row">
                <div className="col s1 l1">
                    <Link className="btn btn-back" to="/"><i className="material-icons ">arrow_back</i></Link>
                </div>
                <div className="col s1 l1">
                    <Link className="" to={"/scoresheet/" + scoreSheetId}><i className="material-icons ">map</i></Link>
                </div>
                <div className="col s1 l1">
                    <Link className="btn btn-forward" to="/"><i className="material-icons ">arrow_forward</i></Link>
                </div>
            </div>
        </div>
    </div>
    )
};

PlayerScoreDetails.propTypes = {
    player: object.isRequired,
    scoreboard: object.isRequired,
    scoreSheetId: number.isRequired
};

export default PlayerScoreDetails;