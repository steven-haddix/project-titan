const merge = require('lodash/merge')

const config = {
    all: {
        env: process.env.NODE_ENV || 'development',
        isDev: process.env.NODE_ENV !== 'production',
        basename: process.env.PUBLIC_PATH,
        isBrowser: typeof window !== 'undefined',
        apiUrl: 'https://iqm9qsbm9l.execute-api.us-east-1.amazonaws.com/dev/api',
        fbAppId: '991453140998882',
        googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
        gtmId: 'GTM-WX5ZNVC',
        cognito: {
            USER_POOL_ID : 'us-east-1_2yevchWvf',
            APP_CLIENT_ID : '40037nss4qe8oornoi2ehlc2e6',
            REGION: 'us-east-1',
            IDENTITY_POOL_ID: 'us-east-1:9f40f653-5859-49e6-8bde-503c779bb46d',
        }
    },
    test: {},
    development: {},
    production: {
        apiUrl: 'https://iqm9qsbm9l.execute-api.us-east-1.amazonaws.com/dev/api',
    },
}

module.exports = merge(config.all, config[config.all.env])