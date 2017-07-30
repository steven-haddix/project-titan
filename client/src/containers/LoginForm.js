import React from 'react'
import { reduxForm } from 'redux-form'
import { authLoginRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { LoginForm } from 'components'

const LoginFormContainer = props => <LoginForm {...props} />

const onSubmit = (data, dispatch, props) =>
    dispatch(authLoginRequest('cognito', data))
        .then(() => props.history.push('/'))

const validate = createValidator({
    Username: [required],
    Password: [required],
})

export default reduxForm({
    form: 'LoginForm',
    destroyOnUnmount: true,
    onSubmit,
    validate,
})(LoginFormContainer)