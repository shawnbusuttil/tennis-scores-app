import { useEffect, useState } from "react"

import { Game } from "../types/game"
import { Player } from "../types/player"

export const usePlayData = () => {
    const [players, setPlayers] = useState<Player[]>([])
    const [games, setGames] = useState<Game[]>([])
    const [error, setErrorMessage] = useState<string>()

    const fetchGames = async() => {
        try {
            const data = require("../api/data.json")
            setPlayers(data.players)
            setGames(data.games.sort((a: Game, b: Game) => {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            }))
        } catch (e) {
            setErrorMessage("Err: Data could not be loaded.")
        }
    } 

    useEffect(() => {
        fetchGames()
    }, [])

   return { players, games, error }
}