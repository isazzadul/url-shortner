const { redirect } = require('express/lib/response');
const db = require('../config/db');
const urlModel = require('../models/url');

createURL = async (req, res, next) => {
    const body = req.body.refURL ;
    console.log(body);
    const result = await urlModel.postUrl(body);
    res.status(201).json({shortID : result });
}

getAllURL = async (req, res, next) => {
    try {
        const dbResult = await urlModel.getUrls();
        res.status(200).send(dbResult);
    } catch (err) {
        res.send(err);
    }
}

redirectURL = async (req, res, next) => {
    const id = req.params.id;
    const url = await urlModel.redirectUrl(id);
    res.redirect("https://"+url);
}

module.exports = {
    createURL,
    getAllURL,
    redirectURL,
}