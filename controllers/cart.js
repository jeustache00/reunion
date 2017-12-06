const express = require('express');
const models = require('../models');
const router = express.Router();
const Users = models.Users;
const Products = models.Products;
const Categories = models.Categories;
const Carts = models.Carts;
const CartDetails = models.CartDetails;


var updateTotal = function(req, res, next){
  products.Products
}

router.get('/', (req,res,next) =>{
  return Carts.findOne({
    where: {id: req.query.UserId},
    include:[{
      model: Products
    }]
  })
  .then(found =>{
    parseInt(res.json(found));
    // for(var i=0; i < parseInt(res.json(found.Products.length)); i++){
    //
    // }
  })
  .then(() =>{
    res.sendStatus(200)
  })
  .catch(function(err){})
})
//
// router.get('/', (req, res, next) => {
//   //GET /api/cart?UserId=1
//   return Carts.findOne({
//     where: {
//       UserId: req.query.UserId
//     },
//     include:
//       [{model: Products}, {model: Users}]
//   })
//   .then(products =>{
//     res.json(products);
//   }).catch()
// })


/*
api/cart?UserId=[Desired User Cart]
ProdcutId: ProductId
OptionId: OptionId
quantity: quantity
To remove items from cart, change quantity sent in to negative value
quantity: -2
*/
 const userCart = function(req,res,next){
   return Carts.findOne({
     where:{UserId: req.query.UserId},
     include: {
       model: Products,
       attributes: ['cost']
     }
   })
 }

router.put('/', (req,res,next) => {
  userCart(req,res,next)
  .then(foundCart => {
    return CartDetails.findOrCreate({
      where:{
        CartId: foundCart.id,
        ProductId: req.body.ProductId,
        OptionId: req.body.OptionId,
      }
      // include: {
      //   model: Products,
      //   attributes: ['cost']
      // }
    })
  })
  .spread((cartDetail, isCreated) => {
    if(isCreated){
      return cartDetail.update({
        quantity: req.body.quantity
      });
    } else{
      return cartDetail.update({
        quantity: parseInt(cartDetail.quantity) + parseInt(req.body.quantity)
      });
    }
  })
  .then((finalCart)=>{
    res.json(finalCart);
    res.sendStatus(200);
  })
  .catch(function(err){})

});


//Delete cart from user?
router.delete('/', (req, res, next) =>{

})


module.exports = router
