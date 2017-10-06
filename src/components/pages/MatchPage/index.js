import React from 'react'

import { PageTemplate, MatchHeader, Header, Tile, IconButton } from 'components'
import { MatchList } from 'containers'

const MatchPage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <Tile heading={<MatchHeader />}>
                <MatchList/>
            </Tile>
        </PageTemplate>
    )
}

export default MatchPage