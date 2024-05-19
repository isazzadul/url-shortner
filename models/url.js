const { nanoid } = require('nanoid');
const db = require('../config/db');


async function getUrls() {
    const [rows] = await db.query("SELECT * FROM URL");
    return rows ;
}

async function postUrl(url){
    const shortID = nanoid(5);
    await db.query('INSERT INTO `url`(`shortID`, `refURL`) VALUES (?,?)',[shortID,url]);
    return shortID ;
}
async function redirectUrl(id){
    const [url] = await db.execute(`SELECT refURL FROM url WHERE shortID = '${id}' `);
    console.log(url.json());
    return url[0].refURL ;
}


module.exports = {
    getUrls,
    postUrl,
    redirectUrl,
}
