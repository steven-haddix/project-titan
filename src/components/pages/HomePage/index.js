import React from 'react'

import { PageTemplate, Header, Heading, HorizontalRule } from 'components'
import { LoginForm, PlayerList } from 'containers'

const HomePage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <PlayerList/>
        </PageTemplate>
    )
}

export default HomePage