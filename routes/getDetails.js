const express = require('express');
const router = express.Router();
const Bank = require('../models/bank');



//search by ifsc code
router.post('/ifsc', function(req, res, next) {

     
    if(!req.body.ifsc) return res.status(500).json({message:"IFSC code is not given!"});
    let ifsc = req.body.ifsc.toUpperCase(); 
    //console.log(ifsc)
    Bank.findOne({ifsc:ifsc},function(err,bank){
            if (err)
                return res.status(500).send("There was a problem finding the bank.");
            res.json(bank);
  });
});


//search by city and bank name
router.post('/city', function(req, res, next) {
    if(!req.body.city && !req.body.bank_name) return res.status(500).json({message:"city or bank_name is not given!"});
    let city = req.body.city.toUpperCase();
    let bank_name = req.body.bank_name.toUpperCase();
    
    Bank.find({city:city, bank_name:bank_name},function(err,bank){
            if (err)
                return res.status(500).send("There was a problem finding the bank.");
            console.log(bank.length)
            let branch = {city:city, bank_name:bank_name,branch:[]};

            for(let i=0;i<bank.length;i++){
              branch.branch.push(bank[i].branch);
            }
            res.json(branch);

  });
  
  
});
router.get('/', function(req, res, next) {


        Bank.find(function(err, userData) {
            if (err)
                return res.status(500).send("There was a problem finding the user.");
              console.log(userData.length)
            res.json(userData);
        }).limit(10000)
    });


module.exports = router;