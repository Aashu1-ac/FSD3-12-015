import express from "express";
import products from "./data.js";

const app = express();

// returns name, image, price of all products
app.get("/api/products", (req, res) => {
//   let sortedProducts = products.map(({ name, image, price, id }) => ({
//     name,
//     image,
//     price,
//     id,
//   }));
  let sortedProducts = products.map(
    ({description, reviews, ...rest}) => rest,
  );
  res.status(200).json({ count: sortedProducts.length, data:
  sortedProducts });
});

app.use((req, res) => {
  res.status(404).send("<h1>Page not Found</h1>");
});
app.listen(4444, () => {
  console.log("server is running at port no :4444");
});