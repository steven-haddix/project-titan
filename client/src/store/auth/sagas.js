import { take, put, call, fork } from 'redux-saga/effects'
import {
    CognitoUserPool,
    AuthenticationDetails,
    CognitoUser
} from 'amazon-cognito-identity-js';
import config from 'config';
import * as actions from './actions'

function cognitoLoginPromise(req) {
    return new Promise((resolve, reject) => (
        req.user.authenticateUser(req.authenticationDetails, {
            onSuccess: (result) => resolve({ token: result.getIdToken().getJwtToken() }),
            onFailure: (err) => reject(err),
            newPasswordRequired: (userAttributes, requiredAttributes) => {
                delete userAttributes.email_verified;
                resolve({
                    token: null,
                    challenge: {
                        name: 'passwordChange',
                        details: {
                            user: req.user,
                            userAttributes,
                            requiredAttributes
                        }
                    }
                })
            }
        })
    ));
}

export function* loginCognitoUserPool({ username, password } = {}) {
    const userPool = new CognitoUserPool({
        UserPoolId: config.cognito.USER_POOL_ID,
        ClientId: config.cognito.APP_CLIENT_ID
    });
    const authenticationData = {
        Username: username,
        Password: password
    };

    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const request = { user, authenticationDetails }

    try {
        const resp = yield call(cognitoLoginPromise, request)
        console.log(resp)
        yield put(actions.authLoginSuccess(resp, request))
    } catch (e) {
        yield put(actions.authLoginFailure(e, request))
    }
}

function passwordChangePromise(user, req) {
    return new Promise((resolve, reject) => (
        user.completeNewPasswordChallenge(req.newPassword, { name: 'test', given_name: 'test' }, {
            onSuccess: (result) => resolve({ token: result.getIdToken().getJwtToken() }),
            onFailure: (err) => reject(err)
        })
    ))
}

export function* changeCognitoPassword({ user, username, newPassword } = {}) {
    const request = { username, newPassword }
    try {
        const resp = yield call(passwordChangePromise, user, request)
        console.log(resp)
        yield put(actions.authChangePasswordSuccess(resp, request))
    } catch (e) {
        yield put(actions.authChangePasswordFailure(e, request))
    }
}

export const serviceAction = (suffix, service) => ({ type, payload }) =>
    type === `AUTH_LOGIN_${suffix}` && payload && payload.service === service

export function* watchLoginCognitoPool() {
    // const { payload } = yield take(serviceAction('PREPARE', 'cognito'))
    // yield call(prepareGoogle, payload)
    while (true) {
        const { payload } = yield take(serviceAction('REQUEST', 'cognito'))
        yield call(loginCognitoUserPool, payload)
    }
}

export function* watchChangeCognitoPassword() {
    // const { payload } = yield take(serviceAction('PREPARE', 'cognito'))
    // yield call(prepareGoogle, payload)
    while (true) {
        const { payload } = yield take(actions.AUTH_PASS_CHANGE_REQUEST)
        yield call(changeCognitoPassword, payload)
    }
}

export default function* () {
    yield fork(watchLoginCognitoPool)
    yield fork(watchChangeCognitoPassword)
}