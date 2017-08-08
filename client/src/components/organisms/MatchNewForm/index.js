import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
const uuidv4 = require('uuid/v4');
import { Flex, Box } from 'grid-styled'

import { ReduxField, Block, Link, IconButton } from 'components'

const Error = styled(Block)`
  margin: 1rem 0;
`

const FlexStyled = styled(Flex)`
`

const Form = styled.form`
`

const FieldStyled = styled.div`
`

const MatchNewForm = ({ winnerList, loserList, handleSubmit, submitting, error, ...props }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <FlexStyled direction={[ 'column', 'row' ]}>
                <Box width={[1, 1/2]} mr={[0, 8]} ml={0}>
                    <Field name="winnerId" label="Winner" type="select" component={ReduxField}>
                        <option>----- Select Player -----</option>
                        {winnerList.map(player =>
                            <option key={uuidv4()} value={player.playerId}>{player.email}</option>)}
                    </Field>
                </Box>
                <Box width={[1, 1/2]} mr={0} ml={[0, 8]}>
                    <Field name="loserId" label="Loser" type="select" component={ReduxField}>
                        <option>----- Select Player -----</option>
                        {loserList.map(player =>
                            <option key={uuidv4()} value={player.playerId}>{player.email}</option>)}
                    </Field>
                </Box>
            </FlexStyled>
            <IconButton type="submit" disabled={submitting} icon={submitting ? 'spinner' : undefined}>
                Submit
            </IconButton>
        </Form>
    )
}

export default MatchNewForm