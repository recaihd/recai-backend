// api/index.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend está online 🚀");
});

app.get("/teste", (req, res) => {
  res.json({ msg: "Rota /teste funcionando!" });
});

export default app;