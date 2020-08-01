const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routesProjetos = require('./src/app/routes/projetos.routes');
const routesPlantas = require('./src/app/routes/plantas.routes');
const routesMateriais = require('./src/app/routes/materiais.routes');
const routesPlantasMateriais = require('./src/app/routes/plantas_materiais.routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "API EngeLive." });
});

require('./src/app/routes/auth.routes')(app);

app.use(routesProjetos);
app.use(routesPlantas);
app.use(routesMateriais);
app.use(routesPlantasMateriais);

app.listen(3001, () => {
    console.log("O serviço está executando na porta 3001.");
});