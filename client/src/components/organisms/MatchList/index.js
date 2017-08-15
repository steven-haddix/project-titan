import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Hide from 'hidden-styled'

import { Table, TableCell, TableRow, Heading, LoadingSpinner, Icon  } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const MatchContainer = styled(Flex)`
`

const Cell = styled(Flex)`
    text-align: left;
`

const CellHeader = styled(Cell)`
    font-weight: 600;
    padding: .75em 0;
`

const BattleImage = styled(Icon)`
    font-size: ${60 / 16}rem;
    
    @media screen and (min-width: 40em) {
        font-size: ${50 / 16}rem;
    }
`

const MobileLabel = styled(Hide)`
    margin-right: .5em;
`

const ErrorMessageStyled = styled.div`
    margin: 4em 0;
    text-align: center;
`

const SpinnerContainer = styled.div`
    text-align: center;
`

const twelveHourTime = (hour, minute) => {
    let h = hour % 12;
    if (h === 0) h = 12;
    return (h < 10 ? '0' : '') + h + ':' + (minute < 10 ? '0' : '') + minute + '' + (hour < 12 ? 'am' : 'pm');
}

const formatDate = (date) =>
    `${date.getMonth()}/${date.getDate()}/${date.getFullYear()} ${twelveHourTime(date.getHours(), date.getMinutes())}`

const MatchList = ({ list, loading, failed, ...props }) => {
    return (
        <Wrapper {...props}>
            {!list.length && <SpinnerContainer><LoadingSpinner loading={loading} /></SpinnerContainer>}
            {!loading && !list.length &&
                <ErrorMessageStyled>
                    <Heading level={3}>Uh Oh! There don't appear to be any matches!</Heading>
                </ErrorMessageStyled>}
            {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
            {list.length > 0 &&
            <div>
                <Flex direction={"row"} is={Hide} xs>
                    <CellHeader w={[1, 1/6]}>Date</CellHeader>
                    <CellHeader w={[1, 2/6]} justify="center">Winner</CellHeader>
                    <CellHeader w={[1, 1/6]} justify="center"/>
                    <CellHeader w={[1, 2/6]} justify="center">Loser</CellHeader>
                </Flex>
                <Flex direction="column" my={[20, 0]}>
                    {list.map(match =>
                        <MatchContainer direction={["column", "row"]} my={[20, 0]} key={match.matchId}>
                            <Cell w={[1, 1/6]} align="center">
                                {formatDate(new Date(match.createdAt))}
                            </Cell>
                            <Cell w={[1, 2/6]} justify={"center"} align="center" my={[10, 0]}>
                                {match.winnerEmail}
                            </Cell>
                            <Cell w={[1, 1/6]} justify="center">
                                <BattleImage icon="battle"/>
                            </Cell>
                            <Cell w={[1, 2/6]} justify="center" align="center" my={[10, 0]}>
                                {match.loserEmail}
                            </Cell>
                        </MatchContainer>
                    )}
                </Flex>
                <Table head={
                    <tr>
                        <TableCell heading>Date</TableCell>
                        <TableCell heading>Winner ID</TableCell>
                        <TableCell/>
                        <TableCell heading>Loser ID</TableCell>
                    </tr>
                }>
                    {list.map(match =>
                        <TableRow key={match.matchId}>
                            <TableCell>{formatDate(new Date(match.createdAt))}</TableCell>
                            <TableCell align="left">{match.winnerEmail}</TableCell>
                            <TableCell align="center"><Icon icon="battle" height={30}/></TableCell>
                            <TableCell align="left">{match.loserEmail}</TableCell>
                        </TableRow>
                    )}
                </Table>
            </div>

            }
        </Wrapper>
    )
}

MatchList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
}

export default MatchList
