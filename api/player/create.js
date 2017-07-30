import config from '../config.json'
import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export async function handler(event, context, callback) {
    const params = {
        TableName: config.DDB_PLAYERS_TABLE,
        Item: {
            playerId: event.userName,
            email: event.request.userAttributes.email,
            elo: 1000,
            isProvisional: true,
            createdAt: new Date().getDate()
        }
    };

    try {
        const result = await dynamoDbLib.call('put', params);
        callback(null, success(result))
    } catch (e) {
        callback(null, failure(e));
    }
};
