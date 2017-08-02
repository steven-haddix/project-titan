import React from 'react'

import { PageTemplate, Header, Tile } from 'components'
import { MatchList } from 'containers'

const MatchPage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <Tile heading="Matches">
                <MatchList/>
            </Tile>
        </PageTemplate>
    )
}

export default MatchPage