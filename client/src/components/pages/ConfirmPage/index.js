import React from 'react'

import { PageTemplate, Header, Tile } from 'components'
import { ConfirmForm } from 'containers'

const ConfirmPage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <Tile heading="Confirm Email">
                <ConfirmForm />
            </Tile>
        </PageTemplate>
    )
}

export default ConfirmPage