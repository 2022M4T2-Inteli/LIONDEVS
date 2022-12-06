// const express = require('express');
// var router = express.Router();

// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;


// app.get("/readAWSData", (req, res) => { // Método Get, pega as informações disponíveis no EndPoint, sendo assim, é possível pegar os dados enviados da Aws para esse EndPoint

//     res.statusCode = 200;

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     var selectCommand = 'Query SQL';

//     aws.all(sql, [], (err, rows) => {
//         if (err) {
//             throw err;
//         }
//         res.json(awsData);
//     });
//     aws.close();
// });

// router.get(“/”, function(req, res, next) {
//     res.send(“API is working properly”);
// });

// module.exports = router;



// Starting new part

const express = require('express');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

// import the aws sdk to use the dynamodb
// libraries in the app
const AWS = require('aws-sdk');

// update the region to 
// where dynamodb is hosted
AWS.config.update({ region: 'us-west-2' });

// create a new dynamodb client
// which provides connectivity b/w the app
// and the db instance
const client = new AWS.DynamoDB.DocumentClient();
const tableName = 'MailSources';

app.use(bodyParser.json());

app.get("/rows/all", (req, res) => {
    var params = {
        TableName: tableName
    };

    client.scan(params, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            var items = [];
            for (var i in data.Items)
                items.push(data.Items[i]['Name']);

            res.contentType = 'application/json';
            res.send(items);
        }
    });
});

app.post("/rows/add", (req, res) => {
    var body = req.body;
    var params = {
        TableName: tableName,
        Item: {
            "Id": uuidv4(),
            "Name": body["name"]
        }
    };

    client.put(params, (err, data) => {
        var status = {};
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            status["success"] = false;
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
            status["success"] = true;
        }
        res.contentType = "application/json";
        res.send(status);
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})