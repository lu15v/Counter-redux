import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return (
      <button onClick={this.props.fun}>{this.props.name}</button>
    )
  }
}
