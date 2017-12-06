import React from 'react'
import Options from '../components/Options'
import Cart from '../components/Cart'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="container">
        <Options />
        <Cart />
      </div>
    )
  }
}
