import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Table, TableCell, TableRow, LoadingSpinner  } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const MatchList = ({ list, loading, failed, ...props }) => {
    return (
        <Wrapper {...props}>
            {!list.length && loading && <LoadingSpinner loading={loading} />}
            {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
            {list.length > 0 &&
                <Table head={
                    <tr>
                        <TableCell heading>Winner ID</TableCell>
                        <TableCell heading>Loser ID</TableCell>
                    </tr>
                }>
                    {list.map(match =>
                        <TableRow key={match.matchId}>
                            <TableCell>{match.winnerId}</TableCell>
                            <TableCell>{match.loserId}</TableCell>
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