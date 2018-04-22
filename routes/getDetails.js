var express = require('express');
var router = express.Router();
var Bank = require('../models/bank');


router.post('/ifsc', function(req, res, next) {
    
    Bank.findOne({ifsc: req.body.ifsc},function(err,bank){
            if (err)
                return res.status(500).send("There was a problem finding the bank.");
            res.json(bank);
  });
});

router.post('/city', function(req, res, next) {
    
    Bank.find({city: req.body.city, bank_name:req.body.bank_name},function(err,bank){
            if (err)
                return res.status(500).send("There was a problem finding the bank.");
            console.log(bank.length)
            var branch = {city: req.body.city, bank_name:req.body.bank_name,branch:[]};

            for(var i=0;i<bank.length;i++){
              branch.branch.push(bank[i].branch);
            }
            res.json(branch);

  });
  
  
});
router.get('/', function(req, res, next) {


        Bank.find(function(err, userData) {
            if (err)
                return res.status(500).send("There was a problem finding the user.");
            res.json(userData);
        })
    });



module.exports = router;