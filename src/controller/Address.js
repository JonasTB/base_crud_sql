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
        }).catch((error) => {
            return res.status(400).json({ error: error.message });
        })
    },

    getMany: async(req, res) => {
        await Address.findAll().then((getMany) => {
            return res.status(200).json(getMany);
        }).catch((error) => {
            return res.status(400).json({ error: error.message });
        });
    }
}