//import {mustBeLoggedIn} from './utils.js';
const express = require('express');
const models = require('../models');
const router = express.Router();
const Products = models.Products;
const Categories = models.Categories;

router.get('/', (req, res) => {
  //mustBeLoggedIn(req,res,next)
  Products.findAll({
    include: [{
      model: Categories,
      where: req.query
    }]
  }).then(products =>
    res.json(products)
  )
})

router.post('/', (req, res, next) =>{
  //mustBeLoggedIn(req,res,next)
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
