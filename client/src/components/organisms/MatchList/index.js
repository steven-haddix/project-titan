import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Table, TableCell, TableRow, LoadingSpinner, Icon  } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const SpinnerContainer = styled.div`
    text-align: center;
`

const formatDate = (date) => `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

const MatchList = ({ list, loading, failed, ...props }) => {
    return (
        <Wrapper {...props}>
            {!list.length && <SpinnerContainer><LoadingSpinner loading={loading} /></SpinnerContainer>}
            {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
            {list.length > 0 &&
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
                            <TableCell align="center">{match.winnerId}</TableCell>
                            <TableCell align="center"><Icon icon="battle" height={30}/></TableCell>
                            <TableCell align="center">{match.loserId}</TableCell>
                        </TableRow>
                    )}
                </Table>
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