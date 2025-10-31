// api/index.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend está online 🚀 paezao");
});

app.get("/projetos", (req, res) => {
    res.json({ msg: "rota /projetos funcionando!"})
});

app.get("/api", (req, res) => {
  res.json({ msg: "Rota /api funcionando!" });  
});

app.get("/teste", (req, res) => {
  res.json({ msg: "Rota /teste funcionando!" });
});

app.listen(10000, () => {
  console.log("Servidor rodando na porta 3000");
});

export default app;