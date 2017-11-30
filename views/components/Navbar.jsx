import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = (props) => {
  return (
      <div id="header" className="style2">
	    <nav id="top" className="htop">
	      <div className="container">
	        <div className="row"><span className="drop-icon visible-sm visible-xs"><i className="fa fa-align-justify"></i></span>
	          <div className="pull-left flip left-top">
	            <div className="links">
	              <ul>
	                <li className="mobile"><i className="fa fa-phone"></i>+123456789</li>
	                <li className="email"><a href="mailto:info@marketshop.com"><i className="fa fa-envelope"></i>info@try2buy.com</a></li>
	                <li className="mobile"><i className="fa fa-truck"></i> Free Shipping On Orders Over $50</li>

	              </ul>
	            </div>
	          </div>
	          <div id="top-links" className="nav pull-right flip">
	            <ul>
	              <li><a href="login.html">Login</a></li>
	              <li><a href="register.html">Register</a></li>
	            </ul>
	          </div>
	        </div>
	      </div>
	    </nav>
	    
	    <header className="header-row">
	      <div className="container">
	        <div className="table-container">

	          <div className="col-table-cell col-lg-3 col-md-3 col-sm-12 col-xs-12 inner">
	          </div>

	          <div className="col-table-cell col-lg-6 col-md-6 col-sm-12 col-xs-12">
	            <div id="logo"><a href="index.html"><img className="img-responsive" src="image/logo2.jpg" title="TRY2BUY" alt="TRY2BUY" /></a></div>
	          </div>

	          <div className="col-table-cell col-lg-3 col-md-3 col-sm-12 col-xs-12 inner">
	            <div id="search" className="input-group">
	              <input id="filter_name" type="text" name="search" value="" placeholder="Search" className="form-control input-lg" />
	              <button type="button" className="button-search"><i className="fa fa-search"></i></button>
	            </div>
	          </div>
	        </div>
	      </div>
	    </header>

	    <nav id="menu" className="navbar center">
	      <div className="navbar-header"> <span className="visible-xs visible-sm"> Menu <b></b></span></div>
	      <div className="container">
	        <div className="collapse navbar-collapse navbar-ex1-collapse">
	          <ul className="nav navbar-nav">
	            <li><a className="home_link" title="Home" href="index.html">Home</a></li>
	            <li className="mega-menu dropdown"><Link to="/product">Women</Link></li>
	            <li className="mega-menu dropdown"><Link to="/polls">Polls</Link></li>
	            <li className="mega-menu dropdown"><Link to="/product">Clothing</Link></li>
	            <li className="mega-menu dropdown"><Link to="/product">Shoes</Link></li>
	            <li className="mega-menu dropdown"><Link to="/product2">Test</Link></li>
	            <li className="mega-menu dropdown"><Link to="/cart">CART</Link></li>
	          </ul>
	        </div>
	      </div>
	    </nav>

	  </div>
  )
}

module.exports = Navigation