import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button, Block, ReduxField, Link, IconButton } from 'components'
import { Modal } from 'containers'

const Error = styled(Block)`
  margin: 1rem 0;
`

const Form = styled.form`
`

const SignUpStyled = styled.div`
    margin: 1rem 0;
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
            <IconButton type="submit" disabled={submitting} icon={submitting ? 'spinner' : undefined}>
                Login
            </IconButton>
            <SignUpStyled>
                No Account yet? <Link to="/sign-up" activeClassName="active">Sign Up</Link>
            </SignUpStyled>
        </Form>
    )
}

export default LoginForm