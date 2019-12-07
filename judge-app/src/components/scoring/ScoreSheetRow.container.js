import React from 'react'
import { object, string } from "prop-types";
import { Link } from 'react-router-dom';


const ScoreSheetRow = ({ score, icon, label, link }) => {
    return (
        <div className="row">
            <div className="col s3"><span className="counter">{score.score}</span>x<span className="points">{score.value}</span>=<span className="score">{score.score * score.value}</span></div>
            <Link className="waves-effect waves-light btn col s9" to={link || "#"}>{label}<i className="material-icons right">{icon}</i></Link>
        </div>
    );
}

ScoreSheetRow.propTypes = {
    score: object.isRequired,
    icon: string.isRequired,
    label: string.isRequired,
    link: string
};


export default ScoreSheetRow;