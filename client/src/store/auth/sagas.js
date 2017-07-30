import { take, put, call, fork } from 'redux-saga/effects'
import { SubmissionError } from 'redux-form'
import {
    CognitoUserPool,
    AuthenticationDetails,
    CognitoUser
} from 'amazon-cognito-identity-js';
import config from 'config';
import * as actions from './actions'

const poolData = {
    UserPoolId : config.cognito.USER_POOL_ID,
    ClientId : config.cognito.APP_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);

export const serviceAction = (suffix, service) => ({ type, payload }) =>
    type === `AUTH_LOGIN_${suffix}` && payload && payload.service === service

function cognitoLoginPromise(user, authDetails) {
    return new Promise((resolve, reject) => (
        user.authenticateUser(authDetails, {
            onSuccess: (result) => {
                user.getUserAttributes((err, attrs) => {
                    const payload = {};
                    attrs.forEach((attr) => payload[attr.Name] = attr.Value);
                    payload.jwt = result.getIdToken().getJwtToken();
                    resolve({ payload });
                });
            },
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

export function* loginCognitoUserPool({ Username, Password } = {}, { thunk }) {
    const authenticationData = { Username, Password };
    const user = new CognitoUser({ Username, Pool: userPool });
    const authDetails = new AuthenticationDetails(authenticationData);

    const request = { user, authDetails }

    try {
        const { payload } = yield call(cognitoLoginPromise, user, authDetails)
        console.log(payload)
        yield put(actions.authLoginSuccess(payload, request, thunk))
    } catch (e) {
        console.log(e.message)
        yield put(actions.authLoginFailure('cognito', new SubmissionError({ _error: e.message }), request, thunk))
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

export function* changeCognitoPassword({ newPassword } = {}) {
    const request = { newPassword }
    try {
        const user = userPool.getCurrentUser();
        const resp = yield call(passwordChangePromise, user, request)
        console.log(resp)
        yield put(actions.authChangePasswordSuccess(resp, request))
    } catch (e) {
        yield put(actions.authChangePasswordFailure(e, request))
    }
}

export function signUpPromise(email, password, attributeList) {
    return new Promise((resolve, reject) => (
        userPool.signUp(email, password, attributeList, null, function(err, result) {
            if (err) {
                console.error(err)
                return reject(err);
            }
            resolve(result.user)
        })
    ))
}

export function* signUp({ Email, Password } = {}, { thunk }) {
    try {
        const user = yield call(signUpPromise, Email, Password, []);
        yield put(actions.authSignUpSuccess(user, { Email, Password }, thunk))
    } catch (e) {
        yield put(actions.authSignUpFailure(new SubmissionError({ _error: e.message }), { Email, Password }, thunk))
    }
}

export function confirmPromise(user, confirmationCode) {
    return new Promise((resolve, reject) => (
        user.confirmRegistration(confirmationCode, true, (err, result) => {
            if (err) {
                console.error(err);
                return reject(err);
            }
            resolve(result)
        })
    ))
}

export function* confirm({ Username, ConfirmationCode } = {}, { thunk }) {
    try {
        const user = new CognitoUser({ Username, Pool: userPool });

        const resp = yield call(confirmPromise, user, ConfirmationCode);
        yield put(actions.authConfirmSuccess(resp, { ConfirmationCode }, thunk))
    } catch (e) {
        yield put(actions.authConfirmFailure(new SubmissionError({ _error: e.message }), { ConfirmationCode }, thunk))
    }
}

export function* watchSignUp() {
    while (true) {
        const { payload, meta } = yield take(actions.AUTH_SIGN_UP_REQUEST)
        yield call(signUp, payload, meta)
    }
}

export function* watchConfirm() {
    while (true) {
        const { payload, meta } = yield take(actions.AUTH_CONFIRM_REQUEST)
        yield call(confirm, payload, meta)
    }
}

export function* watchLoginCognitoPool() {
    while (true) {
        const { payload, meta } = yield take(serviceAction('REQUEST', 'cognito'))
        yield call(loginCognitoUserPool, payload, meta)
    }
}

export function* watchChangeCognitoPassword() {
    while (true) {
        const { payload, meta } = yield take(actions.AUTH_PASS_CHANGE_REQUEST)
        yield call(changeCognitoPassword, api, payload, meta)
    }
}

export default function* () {
    yield fork(watchSignUp)
    yield fork(watchConfirm)
    yield fork(watchLoginCognitoPool)
    yield fork(watchChangeCognitoPassword)
}