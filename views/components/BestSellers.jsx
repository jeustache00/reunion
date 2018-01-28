/*import React from 'react'
import {Link} from 'react-router-dom'

const BestSellers = (props) => {
  return (
        <aside id="column-right" className="col-sm-3 hidden-xs">
          <h3 className="subtitle">Bestsellers</h3>
          <div className="side-item">
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller1.jpg" alt="Brand Fashion Cotton T-Shirt" title="Brand Fashion Cotton T-Shirt" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Brand Fashion Cotton T-Shirt</a></h4>
                <p className="price"><span className="price-new">$110.00</span> <span className="price-old">$122.00</span> <span className="saving">-10%</span></p>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller2.jpg" alt="iPhone5" title="iPhone5" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Thigh High Boots</a></h4>
                <p className="price"> $123.20 </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span></div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller3.jpg" alt="Ideapad Yoga 13-59341124 Laptop" title="Ideapad Yoga 13-59341124 Laptop" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Puppy iPhone Case</a></h4>
                <p className="price"> $22.00 </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller4.jpg" alt="Xitefun Causal Wear Fancy Shoes" title="Xitefun Causal Wear Fancy Shoes" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Fancy Shoes</a></h4>
                <p className="price"> <span className="price-new">$902.00</span> <span className="price-old">$1,202.00</span> <span className="saving">-25%</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller5.jpg" alt="FinePix S8400W Long Zoom Camera" title="FinePix S8400W Long Zoom Camera" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Michael Kors Tote</a></h4>
                <p className="price">$122.00</p>
              </div>
            </div>
                        <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller1.jpg" alt="Brand Fashion Cotton T-Shirt" title="Brand Fashion Cotton T-Shirt" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Brand Fashion Cotton T-Shirt</a></h4>
                <p className="price"><span className="price-new">$110.00</span> <span className="price-old">$122.00</span> <span className="saving">-10%</span></p>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller2.jpg" alt="iPhone5" title="iPhone5" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Thigh High Boots</a></h4>
                <p className="price"> $123.20 </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span></div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller3.jpg" alt="Ideapad Yoga 13-59341124 Laptop" title="Ideapad Yoga 13-59341124 Laptop" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Puppy iPhone Case</a></h4>
                <p className="price"> $22.00 </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller4.jpg" alt="Xitefun Causal Wear Fancy Shoes" title="Xitefun Causal Wear Fancy Shoes" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Fancy Shoes</a></h4>
                <p className="price"> <span className="price-new">$902.00</span> <span className="price-old">$1,202.00</span> <span className="saving">-25%</span> </p>
                <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star fa-stack-2x"></i><i className="fa fa-star-o fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
              </div>
            </div>
            <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller5.jpg" alt="FinePix S8400W Long Zoom Camera" title="FinePix S8400W Long Zoom Camera" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Michael Kors Tote</a></h4>
                <p className="price">$122.00</p>
              </div>
            </div>
             <div className="product-thumb clearfix">
              <div className="image"><a href="product.html"><img src="image/product/bestseller1.jpg" alt="Brand Fashion Cotton T-Shirt" title="Brand Fashion Cotton T-Shirt" className="img-responsive" /></a></div>
              <div className="caption">
                <h4><a href="product.html">Brand Fashion Cotton T-Shirt</a></h4>
                <p className="price"><span className="price-new">$110.00</span> <span className="price-old">$122.00</span> <span className="saving">-10%</span></p>
              </div>
            </div>
          </div>
 
        </aside>
  )
}

module.exports = BestSellers

*/