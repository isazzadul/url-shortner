const express = require("express");
const urlController = require("../controllers/url");
const router = express.Router();

router.route("/")
    .post(urlController.createURL)
    .get(urlController.getAllURL);

router.get('/:id',urlController.redirectURL);


module.exports = router;