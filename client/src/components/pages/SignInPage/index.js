import React from 'react'

import { PageTemplate, Header } from 'components'
import { LoginForm } from 'containers'

const SignInPage = (props) => (
    <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
        <LoginForm {...props} />
    </PageTemplate>
)

export default SignInPage