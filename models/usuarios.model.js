const Usuarios = function (usuario) {
    this.id = usuario.id;
    this.usuario = usuario.usuario;
    this.email = usuario.email;
    this.senha = usuario.senha;
};

Usuarios.table = 'usuarios';

require("./base.model.js")(Usuarios);

module.exports = Usuarios;