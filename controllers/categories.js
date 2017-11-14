const express = require('express');
const models = require('../models');
const router = express.Router();
const Categories = models.Categories;
const Products = models.Categories;


router.get('/', (req, res) => {
  res.json({
    msg: "Successful GET to '/' route"
  })
})

module.exports = router
