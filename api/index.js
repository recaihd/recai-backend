import express from "express";
import serverless from "serverless-http";

const app = express();

app.get("/teste", (req, res) => {
  res.json({ message: "Express na Vercel funcionando!" });
});

export default serverless(app);
