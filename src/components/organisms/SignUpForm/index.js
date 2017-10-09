import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button, Block, ReduxField, Link, IconButton } from 'components'

const Error = styled(Block)`
  margin: 1rem 0;
`

const Form = styled.form`
`

const SignUpLinkStyled = styled.div`
    margin: 1em 0;
`

const SignUpForm = ({ handleSubmit, submitting, error, ...props }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="Email" label="Email" type="email" component={ReduxField}  />
            <Field name="Password" label="Password" type="password" component={ReduxField} />
            <Field name="FirstName" label="First Name" type="text" component={ReduxField} />
            <Field name="LastName" label="Last Name" type="text" component={ReduxField} />
            { error &&
            <Error role="alert" palette="danger">
                {error}
            </Error>}
            <IconButton type="submit" disabled={submitting} icon={submitting ? 'spinner' : undefined}>
                Sign Up
            </IconButton>
            <SignUpLinkStyled>
                Already a User? <Link to="/sign-in" activeClassName="active">Sign In Here</Link>
            </SignUpLinkStyled>
        </Form>
    )
}

export default SignUpForm