const express = require('express');
const models = require('../models');
const router = express.Router();
const Categories = models.Categories;
const Products = models.Categories;
const CartDetail = models.CartDetails;
const CatProds = models.CatProds;

router.post('/', (req,res) =>{
  //mustBeLoggedIn(req,res,next)
  Categories.create({
    type: req.body.type
  })
  .then((newCategory) =>
    res.json(newCategory)
  )
  .catch(
    console.error
  )
})

router.get('/', (req,res) =>{
  Categories.findAll()
    .then((allCategories) => res.json(allCategories))
     .catch(
        console.error
      )
})


// Used to get a list of products based on a category

router.get('/:id', (req, res) => {
  CatProds.findAll({
    where: {
      CategoryId: req.params.id
    },
    include:{
      model: Categories,
      where: {
        id: req.params.id
      }
    }
  })
  .then(products =>
    res.json(products)
  )
})



module.exports = router


module.exports = router
