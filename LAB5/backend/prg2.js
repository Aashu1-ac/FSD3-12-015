import express from "express";
import path from 'path';
import { fileURLToPath } from "node:url";

const app = express();
const filname = fileURLToPath(import.meta.url);
const dirname = path.dirname(filname)



app.get("/", (req, res) => {
  res.sendFile(path.join(dirname, "pages", "product.html"));
});

app.listen(4444, () =>
  console.log("prg2 is running at 4444"));