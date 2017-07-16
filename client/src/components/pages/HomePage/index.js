import React from 'react'

import { PageTemplate } from 'components'
import { Login } from 'containers'

const HomePage = () => {
    return (
        <PageTemplate header={<div/>} hero={<div/>} footer={<div/>}>
            <Login />
        </PageTemplate>
    )
}

export default HomePage