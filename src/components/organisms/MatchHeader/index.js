import React from 'react'
import styled from 'styled-components'
import { Heading, IconButton, HorizontalRule } from 'components'

const HeadingStyled = styled(Heading)`
    position: relative;
`

const IconButtonStyled = styled(IconButton)`
    position:absolute;
    right: 0;
`

const MatchHeader = (props) => {
    return (
        <div>
            <HeadingStyled level={1}>
                Matches
                <IconButtonStyled href="matches/new" icon="plus-circle" noFill hasStroke>New Match</IconButtonStyled>
            </HeadingStyled>
            <HorizontalRule/>
        </div>
    )
}

export default MatchHeader