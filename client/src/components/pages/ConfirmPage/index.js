import React from 'react'

import { PageTemplate, Header } from 'components'
import { ConfirmForm } from 'containers'

const ConfirmPage = () => {
    return (
        <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
            <ConfirmForm />
        </PageTemplate>
    )
}

export default ConfirmPage