const express = require(`express`);
const cors = require(`cors`);
const routes = require(`./src/routes/x-men.route`);

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
