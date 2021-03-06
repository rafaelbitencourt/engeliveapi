const Sequelize = require('sequelize');
const { usuarios } = require("../models");

checkDuplicateUsernameOrEmail = (req, res, next) => {
    // Username
    usuarios.findOne({
        where: {
            usuario: {
                [Sequelize.Op.iLike]: req.body.usuario
            }
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Usuário já está sendo usado."
            });
            return;
        }

        // Email
        usuarios.findOne({
            where: {
                email: {
                    [Sequelize.Op.iLike]: req.body.email
                }
            }
        }).then(user => {
            if (user) {
                res.status(400).send({
                    message: "E-mail já está sendo usado."
                });
                return;
            }

            next();
        });
    });
};

const verifySignUp = {
    checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail
};

module.exports = verifySignUp;