import React from 'react'
import Options from '../components/Options'
import BestSellers from '../components/BestSellers'
import ProductDetail from '../components/ProductDetail'

export default class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: null
    }
  }

   //We get the data first before entering the route
  ComponentWillMount(){
    console.log('testing will')
    axios.get('/api/product?id=1')
      .then((res) => {
          console.log(res.data) //We output the response 
        this.setState({product: res.data}) 
      })
  }

  ComponentDidMount(){
    console.log('testing did')
    axios.get('/api/product/?id=1')
      .then((res) => {
          console.log(res.data)
        this.setState({product: res.data})
      })
  }

  render() {
    console.log("---",this.state)
    return (
      <div className="container">
        <Options />
          <h1>Product page</h1>
          
          {this.state.product && this.state.product.map(specificProduct => {
            return (<div> 
              <h1>{specificProduct.name}</h1>
              <h3>{specificProduct.price}</h3>
              <h3>{specificProduct.quantity}</h3>
              <br/>
            </div>)
          })}
      
        <ProductDetail />
        <BestSellers />

      </div>
      
    )
  }
}
