'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const graphqlRoutes = require('./graphql/routes');

const app = express();
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	console.log(req.method);
	if (req.method === 'OPTIONS'){
		res.send(200);
	}else{
		next();
	}
});

app.use(bodyParser.json());

app.use('/graphql', graphqlRoutes);

// eslint-disable-next-line no-console
app.listen(3010, () => console.log('Express app listening on localhost:3010'));
