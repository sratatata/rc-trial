import React, { Component } from "react";
import PlayerScoreDetails from './PlayerScoreDetails.container';
import { array, object } from "prop-types"

class PlayerScoreDetailsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreValues: {
                reversalInGate: 5,
                touchingFlag: 8,
                overturningFlag: 20,
                usingHoist: 40,
                fixingModel: 60
            },
            osList: [
                { 
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
                }
            ]
        };
    };
    static getDerivedStateFromError(error) {
        return <div>Error occurred while creating players score details. If it won't go away, please contact maintainers of the page.</div>
    }
    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo);
    }
    static propTypes = {
        osList: array,
        scoreValues: object
    };
    render() {
        const playerScoreDetailsList = this.state.osList && this.state.osList.map(os => {
            return <PlayerScoreDetails 
                key={os.scoreSheetId}
                player={os.player} 
                scoreboard={os.scoreboard} 
                scoreSheetId={os.scoreSheetId} />
            });
        return playerScoreDetailsList || <div>Brak zawodników w odcinku specjalnym</div>
    }
};

export default PlayerScoreDetailsComponent;