const { mustBeLoggedIn } = require('./utils');
const express = require('express');
const models = require('../models');
const router = express.Router();
const Products = models.Products;
const Categories = models.Categories;
const Carts = models.Carts;


router.get('/', (req, res, next) => {
  //mustBeLoggedIn(req, res, next)
  Products.findAll({
    include: [{
      model: Categories,
      where: req.query
    }]
  }).then(products =>
    res.json(products)
  )
})


//Used to create Products
router.post('/', (req, res, next) =>{
  //mustBeLoggedIn(req,res,next)
  Products.create({
    name: req.body.name,
    cost: req.body.cost,
    quantity: req.body.quantity,
    url: req.body.url,
    UserId: req.body.UserId
  }).then((prod) => {
    //for reference
    //prod.addCategory([1,2])

    //frontend needs to send an array object for categoryIds
    //to add in postman
    //categories[0] | 1
    //categoreis[1] | 2
    prod.addCategory(req.body.categories)
    res.json(prod);
  })
  .catch(() => {
    res.sendStatus(400);
  })
})




//Delete by Product id in params
//TODO match Products.UserId to make sure
//only owner can delete
router.delete('/:id', (req, res, next) =>{
  Products.destroy({
    where: {id: req.params.id}
  })
  .then((success) =>{
    res.sendStatus(200)
  })
  .catch(() =>{
    res.sendStatus(400)
  })
})



module.exports = router
