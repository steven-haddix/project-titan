import React from 'react'

import { PageTemplate, Header, Tile } from 'components'
import { SignUpForm } from 'containers'

const SignInPage = (props) => (
    <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
        <Tile heading="Sign Up">
            <SignUpForm {...props} />
        </Tile>
    </PageTemplate>
)

export default SignInPage