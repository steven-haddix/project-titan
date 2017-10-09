import React from 'react'
import { storiesOf } from '@storybook/react'
import { LoginForm } from 'containers'

storiesOf('Sign Up Form', module)
    .add('default', () => (
        <LoginForm />
    ))