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

const LoginModal = ({ handleSubmit, submitting, error, ...props }) => {
    return (
        <Modal title="Login" name="login" closeable {...props}>
            <Form onSubmit={handleSubmit}>
                <Field name="username" label="Username" component={ReduxField}  />
                <Field name="password" label="Password" type="password" component={ReduxField} />
                { error &&
                <Error role="alert" palette="danger">
                    {error}
                </Error>}
                <Button type="submit" disabled={submitting}>Login</Button>
            </Form>
        </Modal>
    )
}

export default LoginModal