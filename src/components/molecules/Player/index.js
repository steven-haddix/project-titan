import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'

const Article = styled.article``

const Player = ({ title, body, ...props }) => {
    return (
        <Article {...props}>
            <Heading level={2}>{title}</Heading>
            <Paragraph>{body}</Paragraph>
        </Article>
    )
}

Player.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default Player