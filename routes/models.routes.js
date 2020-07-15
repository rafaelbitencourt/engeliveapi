module.exports = (app,tabelas) => {

    tabelas.forEach(function(tabela) {
        const controller = require(`../controllers/${tabela}.controller.js`);

        app.post(`/${tabela}`, controller.create);

        app.get(`/${tabela}`, controller.findAll);

        app.get(`/${tabela}/:id`, controller.findOne);

        app.put(`/${tabela}/:id`, controller.update);

        app.delete(`/${tabela}/:id`, controller.delete);

        app.delete(`/${tabela}`, controller.deleteAll);
    });
};