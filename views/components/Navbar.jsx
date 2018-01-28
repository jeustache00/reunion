import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    axios.get('/api/categories')
      .then((res) => {
      	console.log(res.data)
        this.setState({categories: res.data})
      })
  }



 render() {
  return (
      <div id="header" className="style2">
	    <nav id="top" className="htop">
	      <div className="container">
	        <div className="row"><span className="drop-icon visible-sm visible-xs"><i className="fa fa-align-justify"></i></span>
	          <div className="pull-left flip left-top">
	            <div className="links">
	              <ul>
	                <li className="mobile"><i className="fa fa-phone"></i>+123456789</li>
	                <li className="email"><a href="mailto:info@marketshop.com"><i className="fa fa-envelope"></i>info@reunionapp.com</a></li>
	                <li className="mobile"><i className="fa fa-phone"></i> Free Emergency SMS </li>

	              </ul>
	            </div>
	          </div>
	          <div id="top-links" className="nav pull-right flip">
	            <ul>
	              <li><Link to="/login">Login</Link></li>
	              <li><Link to="/login">Account</Link></li>
	              <li><Link to="/checkout">Info</Link></li>
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
	            <div id="logo"><a href="/"><img className="img-responsive" src="/Users/julie/Desktop/reunion/public/image/logo.jpg" title="Logo" alt="Logo" /></a></div>
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


							<li><Link className="home_link" title="Home" to="/">Home</Link></li>
							{

							}

	            <li className="mega-menu dropdown"><Link to="/cart">Info</Link></li>
	          </ul>
	        </div>
	      </div>
	    </nav>

	  </div>
    )
  }
}
