import uuid from 'node-uuid'
import Elo from 'arpad';
import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function getPlayerRank(playerId) {
    const params = {
        TableName: 'players',
        // 'Key' defines the partition key and sort key of the time to be retrieved
        // - 'userId': federated identity ID of the authenticated user
        // - 'noteId': path parameter
        Key: {
            playId: playerId,
        },
    };

    try {
        const result = await dynamoDbLib.call('get', params);
        if (result.Item) {
            // Return the retrieved item
            return result.Item.rank.N
        }
        else {
            callback(null, failure({status: false, error: 'Item not found.'}));
        }
    }
    catch(e) {
        callback(null, failure({status: false}));
    }
}

export async function updatePlayerRank(playerId, rank) {
    const params = {
        TableName: 'players',
        // 'Key' defines the partition key and sort key of the time to be updated
        // - 'userId': User Pool sub of the authenticated user
        // - 'noteId': path parameter
        Key: {
            playerId: playerId,
        },
        // 'UpdateExpression' defines the attributes to be updated
        // 'ExpressionAttributeValues' defines the value in the update expression
        UpdateExpression: 'SET rank = :rank',
        ExpressionAttributeValues: { ':rank': rank ? rank : null },
        ReturnValues: 'ALL_NEW',
    };

    try {
        const result = await dynamoDbLib.call('update', params);
        return rank
    }
    catch(e) {
        callback(null, failure({status: false}));
    }
};

export async function main(event, context, callback) {
    const params = {
        TableName: 'matches',
        Item: {
            winnerId: event.winnerId,
            loserId: event.loserId,
            matchId: uuid.v4(),
            createdAt: new Date().getTime(),
        },
    };

    try {
        const elo = new Elo()
        const oldWinnerRank = await getPlayerRank(event.winnerId)
        const oldLoserRank = await getPlayerRank(event.loserId)
        const newWinnerRank = await updatePlayerRank(event.winnerId, elo.newRatingIfWon(oldWinnerRank, oldLoserRank))
        const newLoserRank = await updatePlayerRank(event.loserId, elo.newRatingIfWon(oldLoserRank, oldWinnerRank))
        const result = await dynamoDbLib.call('put', params);

        callback(null, success({
            winner: {
                id: event.winnerId,
                oldRank: oldWinnerRank,
                newRank: newWinnerRank
            },
            loser: {
                id: event.loserId,
                oldRank: oldLoserRank,
                newRank: newLoserRank
            }
        }));
    } catch(e) {
        callback(null, failure({status: false}));
    }
};
