const express = require('express');
const models = require('../models');
const router = express.Router();
const Products = models.Products;
const Categories = models.Categories;

//REFERENCE
//localhost:8000/api/products/?id=1
//To get all products with id from Categories as query
router.get('/', (req, res) => {
  Products.findAll({
    include: [{
      model: Categories,
      where: req.query
    }]
  }).then(products =>
    res.json(products)
  )
})

router.post('/', (req, res) =>{
  Products.create({
    name: req.body.name,
    cost: req.body.cost,
    quantity: req.body.quantity
  }).then((prod) => {
    /*for reference
    prod.addCategory([1,2])
    */
    //frontend needs to send an array of categoryIds
    prod.addCategory(req.body.categories)
    res.json(prod);
  })
  .catch(() => {
    res.sendStatus(400);
  })
})

module.exports = router
