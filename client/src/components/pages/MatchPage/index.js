import React from 'react'

import { PageTemplate, Header } from 'components'
import { MatchList } from 'containers'

const MatchPage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <MatchList/>
        </PageTemplate>
    )
}

export default MatchPage