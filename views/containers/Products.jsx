import React from 'react'
import axios from 'axios'
import Options from '../components/Options'
import Card from '../components/Card'

export default class Products extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      catId: this.props.location.state.catId
    }
  }

  componentDidMount(){
    axios.get(`/api/products/?id=${this.state.catId}`)
      .then((res) => {
        this.setState({products: res.data})
      })
  }

  componentWillReceiveProps(nextProps) {
  	if (this.props.location.state.catId !== nextProps.location.state.catId) {
  		// call api with new cat Id 
      // set new products to state
      axios.get(`/api/products/?id=${nextProps.location.state.catId}`)
      .then((res) => {
        this.setState({products: res.data})
      })
  	}
  }
  

  render() {
    return (
      <div className="container">
        <Options />
        <div className="container-fluid">
        {
        	this.state.products.map((product) => {
        		return (<Card key={product.id} product={product} />)
        	})
        }
        </div>
      </div>
      
    )
  }
}
