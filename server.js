const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "API EngeLive." });
});

const tabelasCrud = [
    'materiais',
    'plantas_materiais',
    'projetos',
    'tipos_materiais'
];

require("./routes/models.routes.js")(app, tabelasCrud);
require("./routes/plantas.routes.js")(app);

app.listen(3001, () => {
    console.log("O serviço está executando na porta 3001.");
});