import React from 'react';
import { object } from "prop-types";
import { Link } from 'react-router-dom';
import ScoreSheetRow from './ScoreSheetRow.container';

const ScoreSheet = ({player, scoreboard }) => {
    const scoreBoardArr = [
        {type: scoreboard.reversalInGate, icon: 'arrow_back', label: 'Cofnięcie'},
        {type: scoreboard.touchingFlag, icon: 'flag', label: 'Dotknięcie'},
        {type: scoreboard.overturningFlag, icon: 'undo', label: 'Skoszenie'},
        {type: scoreboard.usingHoist, icon: 'flash_on', label: 'Użycie wyposażenia'},
        {type: scoreboard.fixingModel, icon: 'pan_tool', label: 'Podniesienie modelu'},
        {type: scoreboard.special, icon: 'location_off', label: 'Pominięcie bramki'},
    ]
    const displayRow = (el, idx) => {
        return <ScoreSheetRow key={idx} score={el.type} icon={el.icon} label={el.label} link={el.link} />
    }
    return (
        <div className="container">
            <h1>Scoring Board for {player}</h1>
            {scoreBoardArr && scoreBoardArr.map(displayRow)}
            <div className="row">
                <Link className="waves-effect waves-light btn col s12" to="#">Zakończ i przejdź dalej<i className="material-icons left">assignment_turned_in</i></Link>
            </div>
        </div>
    )
}

ScoreSheet.propTypes = {
    player: object.isRequired,
    scoreboard: object.isRequired
};


export default ScoreSheet;