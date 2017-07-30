import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button, Block, ReduxField, Link } from 'components'
import { Modal } from 'containers'

const Error = styled(Block)`
  margin: 1rem 0;
`

const Form = styled.form`
`

const SignUpLinkStyled = styled.div`
    margin: 1em 0;
`

const LoginForm = ({ handleSubmit, submitting, error, ...props }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="Username" label="Username / Email" component={ReduxField}  />
            <Field name="Password" label="Password" type="password" component={ReduxField} />
            { error &&
            <Error role="alert" palette="danger">
                {error}
            </Error>}
            <Button type="submit" disabled={submitting}>Login</Button>
            <Link to="/sign-up" activeClassName="active">Sign Up</Link>
        </Form>
    )
}

export default LoginForm