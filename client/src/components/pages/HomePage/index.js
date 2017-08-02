import React from 'react'

import { PageTemplate, Header, Tile, Heading, HorizontalRule } from 'components'
import { LoginForm, PlayerList } from 'containers'

const HomePage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <Tile heading="Players">
                <PlayerList/>
            </Tile>
        </PageTemplate>
    )
}

export default HomePage