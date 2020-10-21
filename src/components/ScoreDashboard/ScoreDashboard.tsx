import React from "react"

import { GameStandings } from "../GameStandings/GameStandings"
import { ScoreGraph } from "../ScoreGraph/ScoreGraph"
import { Loadable } from "../Loadable/Loadable"

import { usePlayData } from "../../hooks/usePlayData"
import { useScores } from "../../hooks/useScores"

import "./ScoreDashboard.scss"

export const ScoreDashboard = () => {
    const { players, games, error } = usePlayData()
    const chartData = useScores(players, games)

    return <div className="dashboard">
        {!error && (
            <>
                <div className="dashboard-standings">
                    <Loadable isLoading={!chartData}>
                        <GameStandings chartData={chartData} />
                    </Loadable>
                </div>
                <div className="dashboard-graph">
                    <Loadable isLoading={!chartData}>
                        <ScoreGraph chartData={chartData} />
                    </Loadable>
                </div>
            </>
        )}
        {error && <div className="error">{error}</div>}
    </div>
}