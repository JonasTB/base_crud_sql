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

    getMany: async(req, res) => {
        await User.findAll().then((list) => {
            return res.json(list);
        }).catch((err) => {
            console.log(err);
            return res.json({ err: err });
        })
    },

    delete: async(req, res) => {
        const id = await User.findByPk(req.params.id)
        await User.destroy({ where: { id: req.params.id }}).then(() => {
            if(!id) return res.status(400).json({ error: 'User not found' }); 
            return res.status(200).json({ OK: 'User deleted successfully' });
        }).catch((err) => {
            return res.status(400).json({ err: err });
        })
    }
}