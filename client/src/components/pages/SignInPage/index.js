import React from 'react'

import { PageTemplate, Header, Tile } from 'components'
import { LoginForm } from 'containers'

const SignInPage = (props) => (
    <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
        <Tile heading="Sign In">
            <LoginForm {...props} />
        </Tile>
    </PageTemplate>
)

export default SignInPage