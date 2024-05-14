const db = require('../config/db');

createURL = async (req, res, next) => {
    db.query("Select * from url");
    res.send(db.execute("Select * from url"));
}

getAllURL = async (req, res, next) => {
    try {
        const [rows] = await db.execute("SELECT * FROM URL");
        res.send(rows);
    } catch (err) {
        res.send(err);
    }


}

module.exports = {
    createURL,
    getAllURL,
}