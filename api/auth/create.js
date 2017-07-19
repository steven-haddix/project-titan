console.log('Loading function');

// dependencies
var AWS = require('aws-sdk');
var config = require('./config');

// Get reference to AWS clients
var dynamodb = new AWS.DynamoDB();

function storeUser(email, password, salt, fn) {
    dynamodb.putItem({
        TableName: 'TitanPlayer',
        Item: {
            email: {
                S: email
            },
            passwordHash: {
                S: password
            },
            passwordSalt: {
                S: salt
            },
            verified: {
                BOOL: false
            },
            verifyToken: {
                S: token
            }
        },
        ConditionExpression: 'attribute_not_exists (email)'
    }, function(err, data) {
        if (err) return fn(err);
        else fn(null, token);
    });
}

exports.handler = (event, context, callback) => {
    var email = event.request.userAttributes.email;
    var clearPassword = event.request.userAttributes.password;

    storeUser(email, function(err, token) {
        if (err) {
            console.error(err)
            if (err.code == 'ConditionalCheckFailedException') {
                // userId already found
                callback(null, { created: false });
            } else {
                callback('Error in storeUser: ' + err);
            }
        } else {
            sendVerificationEmail(email, token, function(err, data) {
                if (err) {
                    callback('Error in sendVerificationEmail: ' + err);
                } else {
                    callback(null, { created: true });
                }
            });
        }
    });

}