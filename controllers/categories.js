const express = require('express');
const models = require('../models');
const router = express.Router();
const Categories = models.Categories;
const Products = models.Products;


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

<<<<<<< HEAD
=======
router.get('/', (req,res) =>{
  Categories.findAll()
    .then((allCategories) => res.json(allCategories))
     .catch(
        console.error
      )
})


>>>>>>> c7457318b718f2b540d1fc459bb3088cb9d54af9
// Used to get a list of products based on a category

router.get('/:id', (req, res) => {
  models.CatProds.findAll({
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
  ).catch(
    console.error
  )
})




module.exports = router
