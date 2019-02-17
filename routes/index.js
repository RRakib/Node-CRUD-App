var express = require('express');
let landing = require("../Controllers/landing")
var router = express.Router();

/* GET home page. */
router.get('/', landing.index)

module.exports = router;
