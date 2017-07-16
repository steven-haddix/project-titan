import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fbAppId, googleClientId } from 'config'
import { fromAuth } from 'store/selectors'
import { authLoginPrepare, authLoginRequest } from 'store/actions'

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
        const { onLoginCognito } = this.props;
        return <div>
            <a onClick={onLoginCognito} href="#">Login</a>
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
    onLoginCognito: (creds) => dispatch(authLoginRequest('cognito', { username: 'shaddix09', password: 'Pa$$w0rd!' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)