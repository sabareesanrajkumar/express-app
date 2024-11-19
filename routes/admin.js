const express = require("express");
const router = express.Router();

router.get(`/add-product`, (req, res, next) => {
  res.send(`
      <h1>Add product</h1>
      <form action="/admin/add-product" method="POST">
        <input type="text" name="titile" placeholder="product">
        <input type="number" name="size" placeholder="size">
        <button type = "submit">Add</button>
      </form`);
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/admin/add-product");
});

module.exports = router;
