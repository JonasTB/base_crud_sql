const Address = require('../model/Address');
const User = require('../model/User');

module.exports = {
    create: async(req, res) => {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;
        const user = await User.findByPk(user_id);
        if(!user) return res.status(400).json({ error: 'User not found' });
        await Address.create({ zipcode, street, number, user_id }).then((address) => {
            return res.status(201).json(address);
        }).catch((err) => {
            console.log(err);
            return res.status(400).json({ err: err });
        })
    },

    getMany: async(req, res) => {
        await Address.findAll().then((getMany) => {
            return res.status(200).json(getMany);
        }).catch((err) => {
            return res.status(400).json({ err: err });
        });
    }, 

    getOne: async(req, res) => {
        await Address.findByPk(req.params.id).then((address) => {
            if(!address) return res.status(400).json({ error: 'Address not found' });
            return res.status(200).json(address);
        }).catch((err) => {
            return res.status(400).json({ err: err });
        })
    },

    delete: async(req, res) => {
        const id = await Address.findByPk(req.params.id);
        if(!id) return res.status(400).json({ error: 'Address not found' });
        await Address.destroy({ where: { id: req.params.id }}).then(() => {
            return res.status(200).json({ OK: 'Address deleted successfully' });
        }).catch((err) => {
            return res.status(400).json({ err: err });
        })
    }
}