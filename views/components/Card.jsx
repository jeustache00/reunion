import React from 'react';

const Card = (props) => {
  const product = props.product

  return (
  <div className="col-sm-6 col-md-4">
    <div className="thumbnail">
      <img className="grid" src={product.url} />
      <div className="caption">
        <h3>{product.name}</h3>
        <p>Price: ${product.cost} | {product.quantity} units available </p>
        <p><a href="#" className="btn btn-primary" role="button">Add to Cart</a> </p>
      </div>
    </div>
  </div>
  )
}

module.exports = Card
