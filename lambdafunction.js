const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    const body = JSON.parse(event.body); // Receive POST JSON from frontend
    const tableName = 'Kasvihuoneet'; // Use your table name

    try {
        await dynamo.put({ TableName: tableName, Item: body }).promise();
        return {
            statusCode: 200,
            body: JSON.stringify({ status: 'Success', item: body }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ status: 'Error', message: err.message }),
        };
    }
};
