import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'

import { Button, Block, ReduxField, IconButton } from 'components'
import { Modal } from 'containers'

const Error = styled(Block)`
  margin: 1rem 0;
`

const Form = styled.form`
    button:not(:first-of-type) {
        margin-left: 1em;
    }
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
            <IconButton type="submit" disabled={submitting} icon={submitting ? 'spinner' : undefined}>
                Confirm
            </IconButton>
            <Button onClick={resendConfirmationCode}>Resend</Button>
        </Form>
    )
}

export default ConfirmForm