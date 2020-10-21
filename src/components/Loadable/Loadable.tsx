import React, { FC } from "react"
import { Spin } from "antd"

import "./Loadable.scss"

type Props = {
    isLoading: boolean
}

export const Loadable: FC<Props> = ({ isLoading, children }) => {
    return <div className="loadable">
        {isLoading ? <Spin size="large" /> : children}
    </div>
}