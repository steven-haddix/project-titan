import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import Icon from '.'

const StyledIcon = styled(Icon)`
    color: #E44C1F;
    fill: #E44C1F;

    & > svg {
      fill: currentcolor;
      stroke: currentcolor;
    }
`

storiesOf('Icon', module)
  .add('default', () => (
    <Icon icon="close" />
  ))
  .add('palette', () => (
    <Icon icon="close" palette="primary" />
  ))
  .add('palette reverse', () => (
    <Icon icon="close" palette="primary" reverse />
  ))
  .add('height', () => (
    <Icon icon="close" height={100} />
  ))
  .add('spinner', () => (
      <StyledIcon icon="spinner" height={100} />
  ))
