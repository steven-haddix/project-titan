import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { reduxForm, getFormValues } from 'redux-form'
import { isPending, hasFailed } from 'redux-saga-thunk'
import { createValidator, required } from 'services/validation'
import { fromPlayer } from 'store/selectors'
import { matchCreateRequest } from 'store/actions'

import { MatchNewForm } from 'components'
import { playerListRequest } from "../store/player/actions";

class MatchNewFormContainer extends Component {
    static propTypes = {
        winnerList: PropTypes.arrayOf(PropTypes.object).isRequired,
        loserList: PropTypes.arrayOf(PropTypes.object).isRequired,
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
        return <MatchNewForm {...this.props} />
    }
}

const getFormValue = (state, att) =>
    getFormValues('MatchNewForm')(state) ? getFormValues('MatchNewForm')(state)[att] : []

const mapStateToProps = state => ({
    winnerList: fromPlayer.getFilteredList(state, 'player', getFormValue(state, 'loser'), 'playerId'),
    loserList: fromPlayer.getFilteredList(state, 'player', getFormValue(state, 'winner'), 'playerId'),
    loading: isPending(state, 'playerList'),
    failed: hasFailed(state, 'playerList'),
})

const mapDispatchToProps = (dispatch, { limit }) => ({
    readList: () => dispatch(playerListRequest('player', { _limit: limit })),
})

const validate = createValidator({
    winner: [(value) => value && value.includes('-----') && 'Required field'],
    loser: [(value) => value && value.includes('-----') && 'Required field'],
})

const onSubmit = (data, dispatch, props) =>
    dispatch(matchCreateRequest('match', data))

MatchNewFormContainer = reduxForm({
    form: 'MatchNewForm',
    destroyOnUnmount: true,
    onSubmit,
    validate,
})(MatchNewFormContainer)

MatchNewFormContainer =
    connect(mapStateToProps, mapDispatchToProps)(MatchNewFormContainer)

export default MatchNewFormContainer