import React from 'react'
import Options from '../components/Options'
import Banners from '../components/Banners'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="container">
        <Options />
        <Banners />
      </div>
    )
  }
}
