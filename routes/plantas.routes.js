module.exports = (app) => {
    const controller = require(`../controllers/plantas.controller.js`);
    const multer  = require('multer');

    var storage = multer.memoryStorage();
      
    const upload = multer({ storage: storage });

    app.post(`/plantas`, upload.single('imagem'), controller.create);

    app.get(`/plantas`, controller.findAll);

    app.get(`/projeto/:id/plantas`, controller.findPorProjeto);

    app.get(`/plantas/:id`, controller.findOne);

    app.put(`/plantas/:id`, controller.update);

    app.delete(`/plantas/:id`, controller.delete);

    app.delete(`/plantas`, controller.deleteAll);
};