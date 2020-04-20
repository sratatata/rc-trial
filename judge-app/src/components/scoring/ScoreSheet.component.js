import React, { Component } from 'react';
import { string, object, number } from "prop-types";
import ScoreSheet from './ScoreSheet.container';

class ScoreSheetComponent extends Component {
    static propTypes = {
        player: string.isRequired,
        scoreboard: object.isRequired,
        scoreSheetId: number.isRequired
    };
    constructor(props) {
        super(props);
        this.state = { 
            player: "Gniewko",
            scoreboard: {
                total: 232,
                reversalInGate: {score: 8, value: 5},
                touchingFlag: {score: 4, value: 8},
                overturningFlag: {score: 1, value: 20},
                usingHoist: {score: 1, value: 40},
                fixingModel: {score: 2, value: 60},
                special: {score: -20, value: 1}
            },
            scoreSheetId: 1
               
        };
    };
    render() {
        return <ScoreSheet 
            player={this.state.player}
            scoreboard={this.state.scoreboard}
            sheet={this.state.scoreSheetId}
        />
    }
}

export default ScoreSheetComponent;