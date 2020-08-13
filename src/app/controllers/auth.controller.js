const { Usuarios, Tenants } = require("../models");
const config = require("../../../config/auth.config.js");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const tenant = require("../models/tenant");

exports.signup = (req, res) => {
    // Save User to Database
    Tenants.create()
        .then(tenant => {
            Usuarios.create({
                usuario: req.body.usuario,
                email: req.body.email,
                senha: bcrypt.hashSync(req.body.senha, 8),
                idtenant: tenant.dataValues.id
            })
                .then(user => {
                    res.status(200).send({ message: "Conta criada com sucesso!" });
                })
                .catch(err => {
                    res.status(500).send({ message: err.message });
                });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
    
};

exports.signin = (req, res) => {
    Usuarios.findOne({
        where: {
            usuario: req.body.usuario
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.senha,
                user.senha
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id, idtenant: user.idtenant }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                usuario: user.usuario,
                email: user.email,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};