/*import React from 'react'
import {Link} from 'react-router-dom'

const ProductDetail = (props) => {
  return (
        <div id="content" className="col-sm-9">
          <div itemscope itemtype="http://schema.org/Product">
            <h1 className="title" itemprop="name">Little Black Dress</h1>
            <div className="row product-info">
              <div className="col-sm-6">
                <div className="image"><img className="img-responsive" itemprop="image" id="zoom_01" src="image/product/littleblackdress_1.jpg" title="Little Black Dress" alt="Little Black Dress" data-zoom-image="image/product/littleblackdress_1.3.jpg" /> </div>
                <div className="center-block text-center"><span className="zoom-gallery"><i className="fa fa-search"></i> Click image for Gallery</span></div>
                <div className="image-additional" id="gallery_01"> <a className="thumbnail" href="#" data-zoom-image="image/product/littleblackdress_2.3.jpg" data-image="image/product/littleblackdress_2.2.jpg" title="Little Black Dress"> <img src="image/product/littleblackdress_2.1.jpg" title="Little Black Dress" alt = "Little Black Dress"/></a> <a className="thumbnail" href="#" data-zoom-image="image/product/littleblackdress_3.3.jpg" data-image="image/product/littleblackdress_3.2.jpg" title="Little Black Dress"><img src="image/product/littleblackdress_3.1.jpg" title="Little Black Dress" alt="Little Black Dress" /></a> <a className="thumbnail" href="#" data-zoom-image="image/product/littleblackdress_4.3.jpg.jpg" data-image="image/product/littleblackdress_4.2" title="Little Black Dress"><img src="image/product/littleblackdress_4.1.jpg" title="Little Black Dress" alt="Little Black Dress" /></a> <a className="thumbnail" href="#" data-zoom-image="image/product/littleblackdress_5.3.jpg" data-image="image/product/littleblackdress_5.2" title="Little Black Dress"><img src="image/product/littleblackdress_5.1.jpg" title="Little Black Dress" alt="Little Black Dress" /></a> </div>
              </div>
              <div className="col-sm-6">
                <ul className="list-unstyled description">
                  <li><b>Brand:</b> <a href="#"><span itemprop="brand">Alexander McQueen</span></a></li>
                  <li><b>Product Code:</b> <span itemprop="mpn">#810974</span></li>
                  <li>Steal the show in this knit dress with cool details that's sure to keep you on trend! A chic mock neck tops this look while an edgy lattice cut-out sits below. Long fitted sleeves frame the figure flaunting silhouette. Complete the look with your favorite sneakers for an effortless ensemble!</li>
                </ul>
                <ul className="price-box">
                  <li className="price" itemprop="offers" itemscope itemtype="http://schema.org/Offer"><span className="price-old">$402.00</span> <span itemprop="price">$242.00<span itemprop="availability" content="In Stock"></span></span></li>
                  <li></li>
                </ul>
                <div id="product">
                  <h3 className="subtitle">Available Options</h3>
                  <div className="form-group required">
                    <label className="control-label">Color</label>
                    <select className="form-control" id="input-option200" name="option[200]">
                      <option value=""> --- Please Select --- </option>
                      <option value="4">Black </option>
                      <option value="3">Silver </option>
                      <option value="1">Green </option>
                      <option value="2">Blue </option>
                    </select>
                  </div>
                  <div className="cart">
                    <div>
                      <div className="qty">
                        <label className="control-label" for="input-quantity">Qty</label>
                        <input type="text" name="quantity" value="1" size="2" id="input-quantity" className="form-control" />

                        <a className="qtyBtn plus" href="#">+</a><br />
                        <a className="qtyBtn mines" href="#">-</a>
                        <div className="clear"></div>
                      </div>
                      <button type="button" id="button-cart" className="btn btn-primary btn-lg">Add to Cart</button>
                    </div>
                    <div>
                      <button type="button" className="wishlist" onClick=""><i className="fa fa-heart"></i> Add to Wish List</button>
                      <br />
                      <button type="button" className="wishlist" onClick=""><i className="fa fa-exchange"></i> Compare this Product</button>
                    </div>
                  </div>
                </div>
                <div className="rating" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
                  <meta itemprop="ratingValue" content="0" />
                  <p><span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-1x"></i><i className="fa fa-star-o fa-stack-1x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-1x"></i></span> <a onClick="$('a[href=\'#tab-review\']').trigger('click'); return false;" href=""><span itemprop="reviewCount">1 reviews</span></a> / <a onClick="$('a[href=\'#tab-review\']').trigger('click'); return false;" href="">Write a review</a></p>
                </div>
                <hr />
              </div>
            </div>
            <ul className="nav nav-tabs">
              <li className="active"><a href="#tab-description" data-toggle="tab">Description</a></li>
            </ul>
            <div className="tab-content">
              <div itemprop="description" id="tab-description" className="tab-pane active">
                <div>
                  <p><b>Jewel neckline; A-line silhouette</b></p>
                  <p>The long form-fitting dress features an alluring deep sweetheart neckline with a sheer mesh inset./p>
                  <p><b>Slinky open-back design</b></p>
                  <p>The slinky open-back design on this designer dress has a sexy low back for a hot look on your special evening.</p>
                  <p><b>Hugs your curves</b></p>
                  <p> A long jersey prom gown that hugs your curves to give you a beautiful silhouette.</p>
                  <p><b>Sleek formal gown</b></p>
                  <p>This sleek formal gown has a stunning finish with an alluring thigh-high side slit and sweep train. </p>
                  <p><b>Winning Choice</b></p>
                  <p>A designer evening gown that would be a winning choice for prom or pageant.</p>
                </p></div>

              </div>


            </div>
          </div>
        </div>

  )
}

module.exports = ProductDetail
*/