const express = require('express');
const models = require('../models');
const router = express.Router();
const Users = models.Users;
const Products = models.Products;
const Categories = models.Categories;
const Carts = models.Carts;
const CartDetails = models.CartDetails;


router.get('/', (req, res) => {
  return Carts.findOne({
    where: {
      UserId: req.body.UserId
    },
    include:
      [{model: Users}, {model: Products}]
  })
  .then(products =>
    res.json(products)
  ).catch()
})

router.post('/', (req,res,next) => {
  return Carts.findOne({
    where: {
      UserId: req.query.UserId
    }
  })
  .then(foundCart => {
      return CartDetails.findOne({
        where:{
          CartId: foundCart.id,
          ProductId: req.body.pid,
          option: req.body.option || 3
        }
      })
    }
  )
  // .then(([cartDetail, isCreated]) => {
  //   console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^", cartDetail, isCreated, req.body.quantity)
  //   if(isCreated){
  //     return cartDetail.update({
  //       quantity: req.body.quantity
  //     })
  //   } else{
  //     return cartDetail.update({
  //       quantity: cartDetail.quantity + req.body.quantity
  //     })
  //   }
  // })
  // .then(returnedCartDetail => res.json(returnedCartDetail))
  .catch(() =>{
    res.sendStatus(400)
  })

})


//Delete cart from user?
router.delete('/', (req, res, next) =>{

})


module.exports = router
