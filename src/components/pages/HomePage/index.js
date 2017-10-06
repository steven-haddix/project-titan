import React from 'react'

import { PageTemplate, PlayerHeader, Header, Tile, Heading, HorizontalRule } from 'components'
import { LoginForm, PlayerList } from 'containers'

const HomePage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <Tile heading={<PlayerHeader/>}>
                <PlayerList/>
            </Tile>
        </PageTemplate>
    )
}

export default HomePage