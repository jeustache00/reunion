import React from 'react'
import {Link} from 'react-router-dom'

const Checkout = (props) => {
  return (

<div id="content" className="col-sm-12">
          <h1 className="title">Checkout</h1>
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title"><i className="fa fa-user"></i> Your Personal Details</h4>
                </div>
                  <div className="panel-body">
                        <fieldset id="account">
                          <div className="form-group required">
                            <label className="control-label">First Name</label>
                            <input type="text" className="form-control" id="input-payment-firstname" placeholder="First Name" name="firstname" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label">Last Name</label>
                            <input type="text" className="form-control" id="input-payment-lastname" placeholder="Last Name" name="lastname" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label">E-Mail</label>
                            <input type="text" className="form-control" id="input-payment-email" placeholder="E-Mail" name="email" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label">Telephone</label>
                            <input type="text" className="form-control" id="input-payment-telephone" placeholder="Telephone" name="telephone" />
                          </div>  
                        </fieldset>
                      </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title"><i className="fa fa-book"></i> Your Address</h4>
                </div>
                  <div className="panel-body">
                        <fieldset id="address" className="required">
                          <div className="form-group">
                            <label className="control-label">Company</label>
                            <input type="text" className="form-control" id="input-payment-company" placeholder="Company" name="company" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label">Address 1</label>
                            <input type="text" className="form-control" id="input-payment-address-1" placeholder="Address 1" name="address_1" />
                          </div>
                          <div className="form-group">
                            <label className="control-label">Address 2</label>
                            <input type="text" className="form-control" id="input-payment-address-2" placeholder="Address 2" name="address_2" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label">City</label>
                            <input type="text" className="form-control" id="input-payment-city" placeholder="City" name="city" />
                          </div>
                          <div className="form-group required">
                            <label className="control-label">Post Code</label>
                            <input type="text" className="form-control" id="input-payment-postcode" placeholder="Post Code" name="postcode" />
                          </div>
                        </fieldset>
                      </div>
              </div>
            </div>



            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title"><i className="fa fa-shopping-cart"></i> Shopping cart</h4>
                    </div>
                      <div className="panel-body">
                        <div className="table-responsive">

                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <td className="text-center">Image</td>
                                <td className="text-left">Product Name</td>
                                <td className="text-left">Size</td>
                                <td className="text-left">Color</td>
                                <td className="text-left">Order</td>
                                <td className="text-left">Quantity</td>
                                <td className="text-right">Unit Price</td>
                                <td className="text-right">Total</td>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="text-center"><a href="product.html"><img src="/image/product/bestseller1.jpg" alt="Brand Fashion Cotton T-Shirt" title="Brand Fashion Cotton T-Shirt" className="img-thumbnail" /></a></td>
                                <td className="text-left"><a href="product.html">Brand Fashion Cotton T-Shirt</a></td>
                                <td className="text-left"><a href="product.html">Medium</a></td>
                                <td className="text-left"><a href="product.html">Black</a></td>
                                <td className="text-left"><a href="product.html">Rent</a></td>
                                <td className="text-left">1</td>
                                <td className="text-right">$110.00</td>
                                <td className="text-right">$110.00</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td className="text-right" colspan="7"><strong>Sub-Total:</strong></td>
                                <td className="text-right">$110.00</td>
                              </tr>
                              <tr>
                                <td className="text-right" colspan="7"><strong>Shipping Rate:</strong></td>
                                <td className="text-right">$5.00</td>
                              </tr>
                              <tr>
                                <td className="text-right" colspan="7"><strong>Total:</strong></td>
                                <td className="text-right">$115.00</td>
                              </tr>
                            </tfoot>
                          </table>


                        </div>
                      </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <h4 className="panel-title"><i className="fa fa-pencil"></i> Add Comments About Your Order</h4>
                    </div>
                      <div className="panel-body">
                        <textarea rows="4" className="form-control" id="confirm_comment" name="comments"></textarea>
                        <br/>
                        <label className="control-label">
                          <input type="checkbox" checked="checked" required="" className="validate required" id="confirm_agree" name="confirm agree" />
                          <span>I have read and agree to the <a className="agree" href="#"><b>Terms &amp; Conditions</b></a></span> </label>
                        <div className="buttons">
                          <div className="pull-right">


                            <input type="button" className="btn btn-primary" id="button-confirm" value="Confirm Order" /> 


                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
}

module.exports = Checkout