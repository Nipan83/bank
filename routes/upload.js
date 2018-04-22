const csv = require('fast-csv');
const mongoose = require('mongoose');
const Bank = require('../models/bank');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
            return res.json("already uploaded!");
	
    csv
            .fromPath(__dirname + '/' + 'bank_branches.csv', {headers: true})
            .on("data", function (data) {
                console.log(data);
                //Removes spaces from property value in-case it does have
                for (let key in data) {
                    data[key] = data[key].trim();
                }
                //Create a bank Object and assign all values for it to save in database
                let bank = new Bank({
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