const express = require('express');
const router = express.Router();

// Defining the routes, for this demo we only need to deliver
// the index.html page, because every thing else gets generated 
// by AngularJS in the Client
router.get('/', function (req, res) {
    res.render('index', {title: 'Demo'});
});

module.exports = router;