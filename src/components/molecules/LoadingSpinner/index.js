import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { Icon } from 'components'

const StyledIcon = styled(Icon)`
    color: #E44C1F
`

const LoadingSpinner = ({ loading, height, ...props }) =>
    (loading && <StyledIcon icon="spinner" height={height} />)

LoadingSpinner.propTypes = {
    loading: PropTypes.bool.isRequired,
    height: PropTypes.number
}

LoadingSpinner.defaultProps = {
    height: 50
}

export default LoadingSpinner;