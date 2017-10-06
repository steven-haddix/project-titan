import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { fromEntities, fromMatch } from 'store/selectors'
import { matchListRequest } from 'store/actions'

import { MatchList } from 'components'

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
        return <MatchList {...{ list, loading, failed }} />
    }
}

const mapStateToProps = state => ({
    state: state,
    list: fromMatch.getList(state, 'match'),
    loading: isPending(state, 'matchList'),
    failed: hasFailed(state, 'matchList'),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
    readList: () => dispatch(matchListRequest('match', { _limit: limit })),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerListContainer)