import React from 'react'

import { PageTemplate, Header } from 'components'
import { SignUpForm } from 'containers'

const SignInPage = (props) => (
    <PageTemplate header={<Header/>} hero={<div/>} footer={<div/>}>
        <SignUpForm {...props} />
    </PageTemplate>
)

export default SignInPage