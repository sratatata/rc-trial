import React, { Component } from 'react';
import ScoreSheet from './ScoreSheet.container'
class ScoreSheetComponent extends Component {
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