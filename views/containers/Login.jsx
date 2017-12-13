import React from 'react'
import Options from '../components/Options'
import Login from '../components/Login'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div className="container">
        <Options />
        <Login />
      </div>
    )
  }
}
