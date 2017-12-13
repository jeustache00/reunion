import React from 'react'
import Options from '../components/Options'
import Checkout from '../components/Checkout'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="container">
        <Options />
        <Checkout />
      </div>
    )
  }
}
