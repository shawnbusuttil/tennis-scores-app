import React, { useMemo } from "react"
import { Chart } from "react-charts"

export const ScoreGraph = ({ chartData }) => {
    const data = useMemo(() => {
        return chartData.map(item => ({
            label: item.name,
            data: item.scores.map((s, idx)=> ({
                primary: new Date(item.timestamps[idx]),
                secondary: s.toString()
            }))
        }))
    }, [chartData])

    const axes = useMemo(() => [
        { primary: true, type: 'utc', position: 'bottom', color: "white" },
        { type: 'linear', position: 'left' },
    ], [])

    const tooltip = useMemo(() => ({
        align: "left",
    }),[])

    return <div data-testid="chart" style={{ width: "90%", height: "40vw", overflow: "hidden" }}>
        <Chart data={data} axes={axes} tooltip={tooltip} dark />
    </div>
}