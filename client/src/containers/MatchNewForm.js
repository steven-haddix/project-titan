import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { createValidator, required } from 'services/validation'
import { fromPlayer } from 'store/selectors'
import { matchCreateRequest } from 'store/actions'

import { MatchNewForm } from 'components'
import {playerListRequest} from "../store/player/actions";

class MatchNewFormContainer extends Component {
    static propTypes = {
        playerList: PropTypes.arrayOf(PropTypes.object).isRequired,
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
        const { playerList, loading, failed } = this.props
        return <MatchNewForm {...{ playerList, loading, failed }} />
    }
}

const mapStateToProps = state => ({
    playerList: fromPlayer.getList(state, 'player'),
    loading: isPending(state, 'playerList'),
    failed: hasFailed(state, 'playerList'),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
    readList: () => dispatch(playerListRequest('player', { _limit: limit })),
})

const validate = createValidator({
    player1: [required],
    player2: [required],
})

const onSubmit = (data, dispatch, props) =>
    dispatch(matchCreateRequest('cognito', data))
        .then(() => props.history.push('/matches'))

MatchNewFormContainer = reduxForm({
    form: 'MatchNewForm',
    destroyOnUnmount: true,
    onSubmit,
    validate,
})(MatchNewFormContainer)

MatchNewFormContainer =
    connect(mapStateToProps, mapDispatchToProps)(MatchNewFormContainer)

export default MatchNewFormContainer