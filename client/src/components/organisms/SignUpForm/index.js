import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button, Block, ReduxField, Link } from 'components'

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
            <Field name="Email" label="Email" component={ReduxField}  />
            <Field name="Password" label="Password" type="password" component={ReduxField} />
            { error &&
            <Error role="alert" palette="danger">
                {error}
            </Error>}
            <Button type="submit" disabled={submitting}>Sign Up</Button>
            Already a User? <Link to="/sign-in" activeClassName="active">Sign In Here</Link>
        </Form>
    )
}

export default SignUpForm