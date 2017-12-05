const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const models = require('../models')
const Users = models.Users
const { mustBeLoggedIn } = require('./utils')
const Categories = models.Categories;
const Products = models.Products;
const Carts = models.Carts;


passport.serializeUser(function(user, done){
  done(null, user.id)
})

passport.deserializeUser(function(id, done){
  Users.findById(id, function(err, user){
    done(err, user)
  })
})

/*****************************
NEED TO LOWERCASE ALL EMAILS
*****************************/
passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      Users.findOne({
        where: {email: email}
      })
        .then(user => {
          if (user) {
            return done(null, false, { message: 'this email is already taken' })
          } else {
            return Users.create({
              email: email,
              password: password,
              isAdmin: req.body.isAdmin
            })
          }
        })
        .then(createdUser =>{
          Carts.create()
          .then(createdCart =>{
            createdCart.setUser(
              createdUser.id
            )
          })
          return createdUser
        })
        .then(createdUser => {
          done(null, createdUser)
        })
        .catch(done);
    })
  }))
/*****************************
NEED TO LOWERCASE ALL EMAILS
*****************************/
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      Users.findOne({
        where: {email},
        attributes: {include: ['password_hashed']}
      })
        .then(user => {
          if (!user) {
            return done(null, false, { message: 'Login incorrect' })
          }
          return user.authenticate(password)
            .then(ok => {
              if (!ok) {
                return done(null, false, { message: 'Login incorrect' })
              }
              done(null, user)
            })
        })
        .catch(done)
    })
    console.log(email + " logged in")
  }
))

router.post('/signup', passport.authenticate('local-signup', { successRedirect: '/'}))

router.post('/login', passport.authenticate('local-login', {successRedirect: '/'}))

//Delete User
//Deletes Cart associated with User


router.delete('/', (req, res) =>{
  Users.destroy({
    where: {email: req.body.email}
  })
  .then(() => {
    res.sendStatus(200)
  })
  .catch(() =>{
    res.sendStatus(400);
  })
});
//returns OK but user remains in table



module.exports = router
