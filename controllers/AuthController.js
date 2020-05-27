const {Usuario} = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const AuthController = {
    login: async (req, res) => {
        let {
            email,
            senha
        } = req.body;

        const user = await Usuario.findOne({
            where: {
                email
            }
        });

        if (!user) {
            res.status(403).json({
                error: "Login Inválido"
            });
        }

        if (!bcrypt.compareSync(senha, user.senha)) {
            res.status(403).json({
                error: "Login Inválido"
            });
        }

        user.senha = undefined;

        let token = jwt.sign({usuario: user}, 'segredo');

        res.status(200).json({usuario: user, token});

    }
}

module.exports = AuthController;