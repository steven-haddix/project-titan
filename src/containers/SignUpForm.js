import React from 'react'
import { reduxForm } from 'redux-form'
import { authSignUpRequest } from 'store/actions'
import { createValidator, required, match } from 'services/validation'

import { SignUpForm } from 'components'

const SignUpFormContainer = props => <SignUpForm {...props} />

const onSubmit = (data, dispatch, props) =>
    dispatch(authSignUpRequest('cognito', data))
        .then(() => props.history.push('/confirm'))

const validate = createValidator({
    Email: [required],
    Password: [required],
})

export default reduxForm({
    form: 'SignUpForm',
    destroyOnUnmount: true,
    onSubmit,
    validate,
})(SignUpFormContainer)