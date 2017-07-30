import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button, Block, ReduxField } from 'components'
import { Modal } from 'containers'

const Error = styled(Block)`
  margin: 1rem 0;
`

const Form = styled.form`
`

const SignUpLinkStyled = styled.div`
    margin: 1em 0;
`

const ConfirmForm = ({ handleSubmit, resendConfirmationCode, submitting, error, ...props }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="Username" label="Email" component={ReduxField}  />
            <Field name="ConfirmationCode" label="Confirmation Code" component={ReduxField}  />
            { error &&
            <Error role="alert" palette="danger">
                {error}
            </Error>}
            <Button type="submit" disabled={submitting}>Confirm</Button>
            <Button onClick={resendConfirmationCode}>Resend</Button>
        </Form>
    )
}

export default ConfirmForm