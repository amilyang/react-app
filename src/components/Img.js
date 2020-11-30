import React, { Component } from 'react'

export default class Img extends Component {
  render () {
    return (
      <div>
        <img src={require("../assets/images/" + this.props.src)} alt={this.props.alt} height={this.props.height} />
      </div>
    )
  }
}
