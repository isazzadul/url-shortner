const express = require("express");
const urlController = require("../controllers/url");
const router = express.Router();

router.route("/")
    .post(urlController.createURL)
    .get(urlController.getAllURL);

router.route('/:id').get(urlController.redirectURL);


module.exports = router;