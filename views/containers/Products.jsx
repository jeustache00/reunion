import React from 'react'
import axios from 'axios'
import Options from '../components/Options'

export default class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: null
    }
  }

  //We get the data first before entering the route
  ComponentWillMount(){
    console.log('testing will')
    axios.get('/api/products?id=1')
      .then((res) => {
          console.log(res.data)
        this.setState({products: res.data})
      })
  }

  ComponentDidMount(){
    console.log('testing did')
    axios.get('/api/products/?id=1')
      .then((res) => {
          console.log(res.data)
        this.setState({products: res.data})
      })
  }

  render() {
    console.log("---",this.state)
    return (
      <div className="container">
        <Options />

        <h1>Products page</h1>
          
          {this.state.products && this.state.products.map(product => {
            return (<div> 
              <h1>{product.name}</h1>
              <h3>{product.price}</h3>
              <h3>{product.quantity}</h3>
              <br/>
            </div>)
          })}

      </div>
      
    )
  }
}
