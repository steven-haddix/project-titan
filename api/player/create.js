import config from '../config.json'
import * as dynamoDbLib from '../libs/dynamodb-lib';

export async function handler(event, context, callback) {
    const params = {
        TableName: config.DDB_PLAYERS_TABLE,
        Item: {
            playerId: event.userName,
            email: event.request.userAttributes.email,
            elo: 1000,
            isProvisional: true,
            createdAt: new Date().getTime()
        },
        Expected: {
            playerId: { Exists: false }
        }
    };

    try {
        const result = await dynamoDbLib.call('put', params);
        callback(null, result)
    } catch (e) {
        callback(e);
    }
};
