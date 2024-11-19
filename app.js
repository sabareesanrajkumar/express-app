const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(`/add-product`, (req, res, next) => {
  res.send(`
    <h1>Add product</h1>
    <form action="/product" method="POST">
      <input type="text" name="titile" placeholder="product">
      <input type="number" name="size" placeholder="size">
      <button type = "submit">Add</button>
    </form`);
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/add-product");
});

app.use(`/`, (req, res, next) => {
  res.send(`<h1>Hello from express</h1>`);
});

app.listen(3000);
