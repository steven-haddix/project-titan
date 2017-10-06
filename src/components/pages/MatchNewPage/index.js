import React from 'react'

import { PageTemplate, MatchHeader, Header, Heading, HorizontalRule, Tile, IconButton } from 'components'
import { MatchNewForm } from 'containers'

const MatchNewPage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <Tile heading={
                <div>
                    <Heading level={1}>New Match</Heading>
                    <HorizontalRule/>
                </div>
            }>
                <MatchNewForm/>
            </Tile>
        </PageTemplate>
    )
}

export default MatchNewPage