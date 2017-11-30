import React from 'react'
import {Link} from 'react-router-dom'

const Banners = (props) => {
  
  return (
    <div className="container">
      <div className="row">
          <div className="marketshop-banner">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"><a href="#"><img src="image/banner/Banner1.jpg" alt="Banner1" title="Banner1" /></a></div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"><a href="#"><img src="image/banner/Banner2.jpg" alt="Banner2" title="Banner2" /></a></div>
            </div>
          </div>
      </div>
    </div>
  )
}

module.exports = Banners