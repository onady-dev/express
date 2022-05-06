const models = require("../../models");

const index = (req, res) => {
    models.User.findAll({}).then((users) => {
        res.json(users);
    });
};

const login = (req, res) => {
    const { name } = req.body
    if (!name) return res.status(400).end();
    models.User.findOne({
        where: { name }
    }).then((user) => {
        res.json(user)
    }).catch(err => {
        console.log(err)
        res.status(500).end();
    })
};

module.exports = {
    index, login,
};