import React from "react"
import { Table } from "antd"

import { PlayerGameData } from "../../types/scores"
import { Player } from "../../types/player"

export const GameStandings = ({ chartData }: { chartData: PlayerGameData[] | undefined }) => {
    const columns = [
        {
            key: 'avatar',
            title: '',
            dataIndex: 'avatar',
            render: (uri: string) => <img width={24} height={24} src={uri} alt="" />
        },
        {
            key: 'name',
            title: 'Name',
            dataIndex: 'name',
            width: "25%"
        },
        {
            key: 'won',
            title: 'Win',
            dataIndex: 'won',
        },
        {
            key: 'lost',
            title: 'Lose',
            dataIndex: 'lost',
        },
        {
            key: "played",
            title: 'Played',
            dataIndex: "played",
            width: "20%",
        },
        {
            key: "points",
            title: "Points",
            dataIndex: "points",
            defaultSortOrder: 'descend' as any,
            sortDirections: ["descend", "ascend"] as any[],
            sorter: (a: PlayerGameData, b: PlayerGameData) => a.points - b.points,
            render: (points: string) => <span data-testid="points">{points}</span> 
        }
    ]

    return <Table rowKey="name" columns={columns} dataSource={chartData} pagination={false} scroll={{ x: "20", y: "40vw" }} />
}