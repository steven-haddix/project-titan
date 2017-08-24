import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import Hide from 'hidden-styled'

import { Icon, LoadingSpinner  } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const PlayerContainer = styled(Flex)`
    margin: 1em 0em;
`

const Cell = styled(Flex)`
    text-align: left;
`

const CellHeader = styled(Cell)`
    font-weight: 600;
    padding: .75em 0;
`

const PlayerImage = styled(Icon)`
    font-size: ${100 / 16}rem;
    
    @media screen and (min-width: 40em) {
        font-size: ${50 / 16}rem;
    }
`

const MobileLabel = styled(Hide)`
    margin-right: .5em;
`

const SpinnerContainer = styled.div`
    text-align: center;
`

const PlayerList = ({ list, loading, failed, ...props }) => {
    return (
        <Wrapper {...props}>
            {!list.length && loading && <SpinnerContainer><LoadingSpinner loading={loading} /></SpinnerContainer>}
            {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
            {list.length > 0 && <div>
                <Flex direction={"row"} is={Hide} xs>
                    <CellHeader w={[1, 1/5]}/>
                    <CellHeader w={[1, 3/5]}>Email</CellHeader>
                    <CellHeader w={[1, 1/5]} justify="center">Rank</CellHeader>
                </Flex>
                <Flex direction="column">
                    {list.map(player =>
                        <PlayerContainer direction={["column", "row"]} key={player.playerId}>
                            <Cell w={[1, 1/5]} justify="center">
                                <PlayerImage icon="user" hasStroke={false} />
                            </Cell>
                            <Cell w={[1, 3/5]} justify={['center', 'left']} align="center" mb={[10, 0]}>
                                {player.email}
                            </Cell>
                            <Cell w={[1, 1/5]} justify="center">
                                <MobileLabel sm md lg>Rank:</MobileLabel>{player.playerRank}
                            </Cell>
                        </PlayerContainer>
                    )}
                </Flex>
            </div>
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
