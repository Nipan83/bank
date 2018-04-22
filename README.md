# Node BANK REST API

This is a simple REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration.

# Features

▪ Given a bank branch IFSC code, get branch details
<br />
▪ Given a bank name and city, gets details of all branches of the bank in the city


[![Build Status](https://travis-ci.org/Nipan83/bankApi.svg?branch=master)](https://travis-ci.org/Nipan83/bankApi)


## Get Started:

`git clone https://github.com/Nipan83/bankApi.git`

`cd bankApi`

## Running project

## Manual

You need to have Node.js and npm installed.

## Run server

```sh
	# Install all dependencies
	npm install

	# Start the server
	npm start

```

## Base URI for making requests

### Running locally

`http://localhost:3000/`

### Heroku 

`https://nipan-bankapp.herokuapp.com/`

## RUN THE APIs

Check the APIs using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)

## Routes

### POST getDetails/ifsc

`http://localhost:3000/getDetails/ifsc` <br />

or <br />

`https://nipan-bankapp.herokuapp.com/getDetails/ifsc`

This route allows a user to search bank details on the platform with information <br />

▪ `ifsc` <br />

All you need to do is pass the ifsc code in the request body in key-value pair 

![alt text](https://i.imgur.com/1RVUev4.png)

### POST getDetails/city

`http://localhost:3000/getDetails/city` <br />

or <br />

`https://nipan-bankapp.herokuapp.com/getDetails/city` <br />

This route allows a user to search branches located in the city with a bank name<br />

▪ `city` and `bank_name` <br />

All you need to do is pass the information in the request body in key-value pair 

![alt text](https://i.imgur.com/NgSraI1.png)


## TESTING

```sh

	# TESTING of APIs
	npm test

```


## AUTHOR

Created and Maintained by [@Nipan83](https://github.com/Nipan83) - nipandas83@gmail.com