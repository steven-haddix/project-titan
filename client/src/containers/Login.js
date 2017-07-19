import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'
import { fbAppId, googleClientId } from 'config'
import { fromAuth } from 'store/selectors'
import { authLoginPrepare, authLoginRequest, authChangePasswordRequest } from 'store/actions'

// import { LoginModal } from 'components'

class LoginContainer extends Component {
    static propTypes = {
        // prepareGoogle: PropTypes.func.isRequired,
        // prepareFacebook: PropTypes.func.isRequired,
    }

    componentDidMount() {
        // this.props.prepareGoogle()
        // this.props.prepareFacebook()
    }

    render() {
        const { onLoginCognito, user } = this.props;
        if (user && user.token) {
            console.log(jwtDecode(user.token))

            return <div>
                Logged in as { JSON.stringify(user) }
            </div>
        } else if (user && user.challenge) {
            return this.handleChallenge(user.challenge)
        } else {
            return <div>
                <a onClick={onLoginCognito} href="#">Login</a>
            </div>
        }
    }

    handleChallenge(challenge) {
        if (challenge.name === 'passwordChange') {
            return this.challengePasswordChange(challenge.details)
        }
    }

    challengePasswordChange(details) {
        const { onChangePasswordCognito } = this.props;
        return <div>
            <a onClick={() => onChangePasswordCognito(details.user)} href="#">Change Password</a>
        </div>
    }
}

const mapStateToProps = state => ({
    user: fromAuth.getUser(state),
})

const mapDispatchToProps = dispatch => ({
    // prepareGoogle: () => dispatch(socialLoginPrepare('google', { clientId: googleClientId })),
    // prepareFacebook: () => dispatch(socialLoginPrepare('facebook', { clientId: fbAppId })),
    // onFacebookLogin: () => dispatch(socialLoginRequest('facebook')),
    // onGoogleLogin: () => dispatch(socialLoginRequest('google')),
    // onClose: () => dispatch(modalHide('login')),
    onLoginCognito: (creds) => dispatch(authLoginRequest('cognito', { username: 'shaddix09', password: 'Pa$$w0rd!!' })),
    onChangePasswordCognito: (user) => dispatch(authChangePasswordRequest('cognito', {
        user,
        username: 'shaddix09',
        oldPassword: 'Pa$$w0rd!!',
        newPassword: 'Pa$$w0rd!!'
    }))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)