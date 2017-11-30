import React from 'react'
import Options from '../components/Options'
import BestSellers from '../components/BestSellers'
import ProductDetail from '../components/ProductDetail'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="container">
        <Options />
        <ProductDetail />
        <BestSellers />
      </div>
      
    )
  }
}
