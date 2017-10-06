import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginForm } from 'containers'

storiesOf('Login Form', module)
    .add('default', () => (
        <LoginForm />
    ))