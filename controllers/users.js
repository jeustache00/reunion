const express = require('express')
const router = express.Router()
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const models = require('../models')
const users = models.Users
const { mustBeLoggedIn } = require('./utils')

passport.serializeUser(function(user, done){
  done(null, user.id)
})

passport.deserializeUser(function(id, done){
  users.findById(id, function(err, user){
    done(err, user)
  })
})

passport.use('local-signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      users.findOne({
        where: {email: email}
      })
        .then(user => {
          if (user) {
            return done(null, false, { message: 'this email is already taken' })
          } else {
            return users.create({
              email: email,
              password: password
            })
          }
        })
        .then(createdUser => {
          done(null, createdUser)
        })
        .catch(done);
    })
  }))

passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  },
  function(req, email, password, done){
    process.nextTick(function(){
      users.findOne({
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


module.exports = router
