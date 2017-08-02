import React from 'react'
import { reduxForm } from 'redux-form'
import { authConfirmRequest } from 'store/actions'
import { createValidator, required } from 'services/validation'

import { ConfirmForm } from 'components'

const ConfirmFormContainer = props => <ConfirmForm {...props} />

const onSubmit = (data, dispatch) => dispatch(authConfirmRequest('cognito', data))
    .then(() => props.history.push('/'))

const validate = createValidator({
    Email: [required],
    ConfirmationCode: [required],
})

export default reduxForm({
    form: 'ConfirmForm',
    destroyOnUnmount: true,
    onSubmit,
    validate,
})(ConfirmFormContainer)