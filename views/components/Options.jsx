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
                <div className="title">Send SMS</div>
                <p>Instantly send a text to your family</p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="feature-box fbox_2">
                <div className="title">Emergency Alerts</div>
                <p>GPS tracking for safety</p>
              </div>
            </div>
          <div className="col-sm-4 col-xs-12">
              <div className="feature-box fbox_2">
                <div className="title">Safety First</div>
                <p>One click panick button</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

module.exports = Options