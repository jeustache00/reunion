import React from 'react'
import {Link} from 'react-router-dom'

const Banners = (props) => {
  
  return (
    <div className="container">
      <div className="row">
          <div className="marketshop-banner">
          <button type="button" class="btn btn-danger btn-lg btn-block">Panic Button</button>
          <hr /> 
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"><a href="#"><img src="image/reunionbanner.jpg" alt="Banner1" title="Banner1" /></a></div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"><a href="#"><img src="image/reunionbanner.jpg" alt="Banner2" title="Banner2" /></a></div>
            </div>
          </div>
      </div>
    </div>
  )
}

module.exports = Banners