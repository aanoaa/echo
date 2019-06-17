import express = require("express");

const version = "banana";
const app: express.Express = express();
app.get("/", (req, res) => {
  res.send("hello world\n");
});

app.get("/version", (req, res) => {
  res.send(`${version}\n`);
});

app.get("/echo/:echo", (req, res) => {
  const echo = req.params["echo"];
  res.send(`${echo}\n`);
});

const port = 3000;
app.listen(port, () => {
  console.info(`http://localhost:${port}`);
});

export default app;
