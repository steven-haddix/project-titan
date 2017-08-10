import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Table, TableCell, TableRow, LoadingSpinner  } from 'components'
import Icon from "../../atoms/Icon/index";

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const SpinnerContainer = styled.div`
    text-align: center;
`

const PlayerList = ({ list, loading, failed, ...props }) => {
    return (
        <Wrapper {...props}>
            {!list.length && loading && <SpinnerContainer><LoadingSpinner loading={loading} /></SpinnerContainer>}
            {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
            {list.length > 0 &&
                <Table head={
                    <tr>
                        <TableCell></TableCell>
                        <TableCell heading>Email</TableCell>
                        <TableCell align="center" heading>Match Count</TableCell>
                        <TableCell align="center" heading>Provisional?</TableCell>
                        <TableCell heading>Rank</TableCell>
                    </tr>
                }>
                    {list.map(player =>
                        <TableRow key={player.playerId}>
                            <TableCell align="center">
                                <Icon icon="user" height={50} hasStroke={false} />
                            </TableCell>
                            <TableCell>{player.email}</TableCell>
                            <TableCell align="center">{player.matchCount}</TableCell>
                            <TableCell align="center">{player.isProvisional ? 'Y' : 'N'}</TableCell>
                            <TableCell>{player.playerRank}</TableCell>
                        </TableRow>
                    )}
                </Table>
            }
        </Wrapper>
    )
}

PlayerList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool,
    failed: PropTypes.bool,
}

export default PlayerList