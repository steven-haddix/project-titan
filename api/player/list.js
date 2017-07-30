import config from '../config.json'
import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export async function handler(event, context, callback) {
    const params = {
        TableName: config.DDB_PLAYERS_TABLE,
    };

    try {
        const result = await dynamoDbLib.call('scan', params);
        if (result.Items) {
            callback(null, success(result.Items))
        } else {
            callback(null, failure({status: false, error: 'Item not found.'}));
        }
    } catch (e) {
        callback(null, failure(e));
    }
};