import React from 'react'
import axios from 'axios'
import Card from '../components/Card'

export default class Polls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count1: 1,
      total: 0
    }
    this.addClickHandler1 = this.addClickHandler1.bind(this)
    this.decrementClickHandler1 = this.decrementClickHandler1.bind(this)
  }
  addClickHandler1 (event) {
    this.setState({count1: this.state.count1 + 1})
  } 
  decrementClickHandler1 (event){
    if (this.state.count1 > 1) {
      this.setState({count1: this.state.count1 - 1})
    }
  }
  render() {
    return (
      <div>
        <h2>Count 1: { this.state.count1}</h2>
        <button onClick={this.addClickHandler1}> + </button>
        <button onClick={this.decrementClickHandler1}> - </button>
      </div>
    )
  }
}
