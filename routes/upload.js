var csv = require('fast-csv');
var mongoose = require('mongoose');
var Bank = require('../models/bank');

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	
    csv
            .fromPath(__dirname + '/' + 'bank_branches.csv', {headers: true})
            .on("data", function (data) {
                console.log(data);
                //Removes spaces from property value in-case it does have
                for (var key in data) {
                    data[key] = data[key].trim();
                }
                //Create a bank Object and assign all values for it to save in database
                var bank = new Bank({
                    ifsc: data['ifsc'],
                    bank_id: data['bank_id'],
                    branch: data['branch'],
                    address: data['address'],
                    city: data['city'],
                    district: data['district'],
                    state: data['state'],
                    bank_name: data['bank_name']
                });
                //save in database
                bank.save(function (err) {
                    if (err) {
                        console.log("There is an error in processing bank data: " + err);
                    } else {
                        console.log("Bank data has been saved: " + data);
                    }
                })
            })
            .on("error", function (error) {
                console.log("There is an error in processing: " + error);
            })
            .on("end", function () {
                console.log("done");
            });
});

module.exports = router;