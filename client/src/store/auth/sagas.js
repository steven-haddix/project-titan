import { take, put, call, fork } from 'redux-saga/effects'
import {
    CognitoUserPool,
    AuthenticationDetails,
    CognitoUser
} from 'amazon-cognito-identity-js';
import config from 'config';

export function loginCognitoUserPool({ username, password } = {}) {
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

    return new Promise((resolve, reject) => (
        user.authenticateUser(authenticationDetails, {
            onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
            onFailure: (err) => reject(err),
        })
    ));
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

export default function* () {
    yield fork(watchLoginCognitoPool)
    // yield fork(watchSocialLoginGoogle)
}