import React from 'react'
import {Link} from 'react-router-dom'

const Options = (props) => {
	  	
  return (
  	<div className="container">
      <div className="row">
        <div className="container">
          <div className="custom-feature-box row">
            <div className="col-sm-4 col-xs-6">
              <div className="feature-box fbox_1">
                <div className="title">Try It</div>
                <p>Sends you a free sample for 24 hours</p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="feature-box fbox_2">
                <div className="title">Rent It</div>
                <p>Easy return in 2 days after purchasing</p>
              </div>
            </div>
          <div className="col-sm-4 col-xs-12">
              <div className="feature-box fbox_2">
                <div className="title">Buy It</div>
                <p>One click checkout available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

module.exports = Options