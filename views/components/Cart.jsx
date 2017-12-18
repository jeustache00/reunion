import React from 'react'
import {Link} from 'react-router-dom'

const Cart = (props) => {
  return (
        <div id="content" className="col-sm-12">
          <h1 className="title">Shopping Cart</h1>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td className="text-center">Image</td>
                    <td className="text-left">Product Name</td>
                    <td className="text-left">Product Size</td>
                    <td className="text-left">Product Color</td>
                    <td className="text-left">Order Type</td>
                    <td className="text-left">Quantity</td>
                    <td className="text-right">Unit Price</td>
                    <td className="text-right">Total</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center"><a href="product.html"><img src="image/product/bestseller1.jpg" alt="Brand Fashion Cotton T-Shirt" title="Brand Fashion Cotton T-Shirt" className="img-thumbnail" /></a></td>
                    <td className="text-left"><a href="product.html">Brand Fashion Cotton T-Shirt</a></td>
                    <td className="text-left">Medium</td>
                    <td className="text-left">Black</td>
                    <td className="text-left">Rent</td>
                    <td className="text-left"><div className="input-group btn-block quantity">
                        <input type="text" name="quantity" value="1" size="1" className="form-control" />
                        <span className="input-group-btn">
                        <button type="submit" data-toggle="tooltip" title="Update" className="btn btn-primary"><i className="fa fa-refresh"></i></button>
                        <button type="button" data-toggle="tooltip" title="Remove" className="btn btn-danger" onClick=""><i className="fa fa-times-circle"></i></button>
                        </span></div></td>
                    <td className="text-right">$110.00</td>
                    <td className="text-right">$110.00</td>
                  </tr>
                  <tr>
                    <td className="text-center"><a href="product.html"><img src="image/product/bestseller2.jpg" alt="Thigh High Boots" title="Thigh High Boots" className="img-thumbnail" /></a></td>
                    <td className="text-left"><a href="product.html">Thigh High Boots</a></td>
                    <td className="text-left">One Size</td>
                    <td className="text-left">Black</td>
                    <td className="text-left">Try</td>
                    <td className="text-left"><div className="input-group btn-block quantity">
                        <input type="text" name="quantity" value="1" size="1" className="form-control" />
                        <span className="input-group-btn">
                        <button type="submit" data-toggle="tooltip" title="Update" className="btn btn-primary"><i className="fa fa-refresh"></i></button>
                        <button type="button" data-toggle="tooltip" title="Remove" className="btn btn-danger" onClick=""><i className="fa fa-times-circle"></i></button>
                        </span></div></td>
                    <td className="text-right">$123.20</td>
                    <td className="text-right">$123.20</td>
                  </tr>
                </tbody>
              </table>
            </div>

          <div className="row">
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">Use Coupon Code</h4>
                </div>
                <div id="collapse-coupon" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <label className="col-sm-4 control-label" for="input-coupon">Enter your coupon here</label>
                    <div className="input-group">
                      <input type="text" name="coupon" value="" placeholder="Enter your coupon here" id="input-coupon" className="form-control" />
                      <span className="input-group-btn">
                      <input type="button" value="Apply Coupon" id="button-coupon" data-loading-text="Loading..."  className="btn btn-primary" />
                      </span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">Use Gift Voucher</h4>
                </div>
                <div id="collapse-voucher" className="panel-collapse collapse in">
                  <div className="panel-body">
                    <label className="col-sm-4 control-label" for="input-voucher">Enter gift voucher code here</label>
                    <div className="input-group">
                      <input type="text" name="voucher" value="" placeholder="Enter gift voucher code here" id="input-voucher" className="form-control" />
                      <span className="input-group-btn">
                      <input type="submit" value="Apply Voucher" id="button-voucher" data-loading-text="Loading..."  className="btn btn-primary" />
                      </span> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel panel-default"></div> 

          <div className="row">
            <div className="col-sm-4 col-sm-offset-8">
              <table className="table table-bordered">
                <tr>
                  <td className="text-right"><strong>Sub-Total:</strong></td>
                  <td className="text-right">$233.20</td>
                </tr>
                  <tr>
                  <td className="text-right"><strong>Discount:</strong></td>
                  <td className="text-right">$0.00</td>
                </tr>
                <tr>
                  <td className="text-right"><strong>Total:</strong></td>
                  <td className="text-right">$233.20</td>
                </tr>
              </table>
            </div>
          </div>

          <div className="buttons">
            <div className="pull-left"><a href="/products" className="btn btn-default">Continue Shopping</a></div>
            <div className="pull-right"><a href="/checkout" className="btn btn-primary">Checkout</a></div>
          </div>
        </div>


  )
}

module.exports = Cart