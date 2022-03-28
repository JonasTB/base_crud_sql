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

    getOne: async(req, res) => {
        await User.findByPk(req.params.id).then((user) => {
            if(!user) return res.status(400).json({ error: 'User not found' });
            return res.status(200).json(user);
        }).catch((err) => {
            return res.status(400).json({ err: err });
        })
    },

    update: async(req, res) => {
        const { name, email } = req.body;
        const id = await User.findByPk(req.params.id);
        if(!id) return res.status(400).json({ error: 'User not found' });
        await User.update({ name: name, email: email }, { where: {id: req.params.id}, returning: true }).then((user) => {
            console.log(user);
            return res.status(200).json(user);
        }).catch((err) => {
            return res.status(400).json({ err: err})
        })
    },

    delete: async(req, res) => {
        const id = await User.findByPk(req.params.id);
        if(!id) return res.status(400).json({ error: 'User not found' }); 
        await User.destroy({ where: { id: req.params.id }}).then(() => {
            return res.status(200).json({ OK: 'User deleted successfully' });
        }).catch((err) => {
            return res.status(400).json({ err: err });
        })
    }
}