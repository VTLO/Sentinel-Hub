import express from "express";
import cors from "cors";
import pinoHttp from "pino-http";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(pinoHttp());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "api-gateway" });
});

app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});
