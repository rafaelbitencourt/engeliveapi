const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routesObras = require('./src/app/routes/obras.routes');
const routesProjetos = require('./src/app/routes/projetos.routes');
const routesPlantas = require('./src/app/routes/plantas.routes');
const routesDetalhes = require('./src/app/routes/detalhes.routes');
const routesPlantasDetalhes = require('./src/app/routes/plantas_detalhes.routes');
const routesTiposProjetos = require('./src/app/routes/tipos_projetos.routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "API EngeLive." });
});

require('./src/app/routes/auth.routes')(app);

app.use(routesObras);
app.use(routesProjetos);
app.use(routesPlantas);
app.use(routesDetalhes);
app.use(routesPlantasDetalhes);
app.use(routesTiposProjetos);

app.listen(process.env.PORT || 3001, () => {
    console.log("O serviço está executando na porta 3001.");
});