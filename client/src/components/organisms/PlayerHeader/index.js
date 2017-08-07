import React from 'react'
import styled from 'styled-components'
import { Heading, IconButton, HorizontalRule } from 'components'

const PlayerHeader = (props) => {
    return (
        <div>
            <Heading level={1}>
                Players
            </Heading>
            <HorizontalRule/>
        </div>
    )
}

export default PlayerHeader