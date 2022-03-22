const User = require('../model/User');

module.exports = {
    createUser: async(req, res) => {
        const { name, email } = req.body;
        await User.create({ name, email }).then((user) => {
            return res.json(user);
        }).catch((err) => {
            console.log(err);
            return res.json({ err: err });
        });
    },

    listUsers: async(req, res) => {
        await User.findAll().then((list) => {
            return res.json(list);
        }).catch((err) => {
            console.log(err);
            return res.json({ err: err });
        })
    }
}