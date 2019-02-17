var express = require('express');
let landing = require("../Controllers/landing")
var router = express.Router();

/* GET home page. */
router.get('/', landing.landing)
router.post("/", landing.submit_lead)

module.exports = router;
