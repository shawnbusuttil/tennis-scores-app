import { useEffect, useState } from "react"

import { Game } from "../types/game"
import { Player } from "../types/player"
import { PlayerGameData } from "../types/scores"

export const useScores = (players: Player[], games: Game[]) => {
    const [playerGameData, setPlayerGameData] = useState<PlayerGameData[] | undefined>()

    useEffect(() => {
        const logResults = (key: keyof Game, game: Game, playerData: PlayerGameData) => {
            playerData.timestamps.push(game.date)

            const player = key === "player1" ? game["player1"] : game["player2"]

            const scoreAtLastIdx = playerData.scores[playerData.scores.length - 1]

            if (player.score === 21) {
                const score = playerData.scores.length ? scoreAtLastIdx + 1 : 1
                playerData.scores.push(score)
                playerData.won++
            } else {
                const score = playerData.scores.length ? scoreAtLastIdx - 1 : -1
                playerData.scores.push(score)
                playerData.lost++
            }

            playerData.played++
        }

        const scores = players.map((player: Player) => {
            const playerGameData = {
                avatar: player.avatar,
                name: player.name,
                won: 0,
                lost: 0,
                played: 0,
                points: 0,
                scores: [],
                timestamps: [],
            }
    
            for (let game of games) {
                if (game.player1.id === player.id) {
                    logResults("player1", game, playerGameData)
                }
                if (game.player2.id === player.id) {
                    logResults("player2", game, playerGameData)
                }
            }

            playerGameData.points = playerGameData.won - playerGameData.lost
            playerGameData.avatar = player.avatar
            return playerGameData
        })
        setPlayerGameData(scores)
    }, [players, games])

    return playerGameData
}