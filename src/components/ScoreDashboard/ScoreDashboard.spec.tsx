import React from "react"
import { render } from "@testing-library/react"

import { ScoreDashboard } from "./ScoreDashboard"

jest.mock("../../api/data.json", () => ({
    "players": [
        {
            "avatar": "https://api.adorable.io/avatars/285/Anas Hall",
            "id": "67476fd1-d4fe-4c85-a81e-9a8c952f7349",
            "name": "Anas Hall"
        },
        {
            "avatar": "https://api.adorable.io/avatars/285/Farrah Hudson",
            "id": "e3a26541-c91c-4153-987a-196e12aa82e6",
            "name": "Farrah Hudson"
        },
        {
            "avatar": "https://api.adorable.io/avatars/285/Abdirahman Beach",
            "id": "11e027ee-c827-4b15-9835-5848901affbb",
            "name": "Abdirahman Beach"
        }
    ],
    "games": [
        {
            "date": "2020-03-09T04:39:35.186Z",
            "player1": {
              "id": "67476fd1-d4fe-4c85-a81e-9a8c952f7349",
              "score": 21
            },
            "player2": {
              "id": "e3a26541-c91c-4153-987a-196e12aa82e6",
              "score": 9
            }
          },
          {
            "date": "2020-02-11T09:34:42.369Z",
            "player1": {
              "id": "67476fd1-d4fe-4c85-a81e-9a8c952f7349",
              "score": 14
            },
            "player2": {
              "id": "11e027ee-c827-4b15-9835-5848901affbb",
              "score": 21
            }
          },
          {
            "date": "2020-01-19T10:53:25.826Z",
            "player1": {
              "id": "e3a26541-c91c-4153-987a-196e12aa82e6",
              "score": 5
            },
            "player2": {
              "id": "11e027ee-c827-4b15-9835-5848901affbb",
              "score": 21
            }
          },
    ]
}))

describe("ScoreDashboard", () => {
    test("As a user I should see the league table", () => {
        const { getByText } = render(<ScoreDashboard />)
        expect(getByText("Anas Hall")).toBeInTheDocument()
        expect(getByText("Farrah Hudson")).toBeInTheDocument()
        expect(getByText("Abdirahman Beach")).toBeInTheDocument()
    })

    test("As a user I should see the league table with correct points in descending order", () => {
        const { getAllByTestId } = render(<ScoreDashboard />)
        const points = getAllByTestId("points")

        expect(points[0].textContent).toEqual("2")
        expect(points[1].textContent).toEqual("0")
        expect(points[2].textContent).toEqual("-2")
    })

    test("As a user I should see a visualization of the player scores", () => {
        const { getByTestId } = render(<ScoreDashboard />)
        expect(getByTestId("chart")).toBeInTheDocument()
    })
})