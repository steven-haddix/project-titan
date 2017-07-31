import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Icon } from 'components'

const StyledIcon = styled(Icon)`
    color: #E44C1F
`

const LoadingSpinner = ({ loading, ...props }) =>
    (loading && <StyledIcon icon="spinner" height={50} />)

LoadingSpinner.propTypes = {
    loading: PropTypes.bool.isRequired,
}

export default LoadingSpinner;