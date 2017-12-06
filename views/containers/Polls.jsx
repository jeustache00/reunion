import React from 'react'
import axios from 'axios'
import Card from '../components/Card'

export default class Polls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // polls: []
      count1: 0,
      count2: 0,
      total: 0
    }
    // this.getAllPolls = this.getAllPolls.bind(this)
    this.addClickHandler1 = this.addClickHandler1.bind(this)
    this.decrementClickHandler1 = this.decrementClickHandler1.bind(this)
  }

  // componentDidMount() {
  //   this.getAllPolls();
  // }

  // getAllPolls() {
  //   axios.get('/api/polls')
  //     .then(res => res.data)
  //     .then(polls => this.setState({polls: polls}))
  //     .catch(console.error)
  // }
  addClickHandler1 (event) {
    this.setState({count1: this.state.count1 + 1})
  } 

  decrementClickHandler1 (event){
    if (this.state.count1 > 0) {
      this.setState({count1: this.state.count1 - 1})
    }
  }

  render() {
    // console.log("polls = ", this.state.polls)
    // const cards = this.state.polls.map(poll => {
    //   return <Card
    //     key={`qid${poll.id}`}
    //     poll={poll} />

    // })

    // <div className="container">
      //   { cards }
      // </div>

    return (
      <div>
        <h1>POLL Page</h1>
        <h2>Count 1: { this.state.count1}</h2>
        <button onClick={this.addClickHandler1}> + </button>
        <button onClick={this.decrementClickHandler1}> - </button>
        <h2>Count 2: { this.state.count2}</h2>
      </div>
    )
  }
}
