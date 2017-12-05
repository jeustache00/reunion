import React from 'react';

const Card = (props) => {
  const product = props.product

  return (
        <div>
          <h2>{product.name}</h2>
          <p>{product.cost}</p>
          <p>{product.quantity} available </p>

            <div className="w3-section">
              <button >Save</button>
              <button >Add to Cart</button>
            </div>
            <br />
        </div>
  )
}

module.exports = Card
