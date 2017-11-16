const express = require('express');
const models = require('../models');
const router = express.Router();
const Categories = models.Categories;
const Products = models.Categories;
const CartDetail = models.CartDetails;


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



/* Used to get a list of products based on a category

router.get('/:id', (req, res) => {
  Cat-prod.findAll({

  })
  .then(products =>
    res.json(products)
  )
})

*/

module.exports = router


module.exports = router
