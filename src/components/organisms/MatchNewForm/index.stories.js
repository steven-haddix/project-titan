import React from 'react'
import { storiesOf } from '@storybook/react'
import { MatchNewForm } from 'containers'

storiesOf('New Match Form', module)
    .add('default', () => (
        <MatchNewForm />
    ))