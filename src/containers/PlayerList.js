import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromEntities, fromPlayer } from 'store/selectors'
import { playerListRequest } from 'store/actions'

import { PlayerList } from 'components'

class PlayerListContainer extends Component {
    static propTypes = {
        list: PropTypes.arrayOf(PropTypes.object).isRequired,
        limit: PropTypes.number,
        loading: PropTypes.bool,
        failed: PropTypes.bool,
        readList: PropTypes.func.isRequired,
    }

    static defaultProps = {
        limit: 20,
    }

    componentWillMount() {
        this.props.readList()
    }

    render() {
        const { list, loading, failed } = this.props
        return <PlayerList {...{ list, loading, failed }} />
    }
}

const mapStateToProps = state => ({
    list: fromPlayer.getList(state, 'player'),
    loading: isPending(state, 'playerList'),
    failed: hasFailed(state, 'playerList'),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
    readList: () => dispatch(playerListRequest('player', { _limit: limit })),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListContainer)