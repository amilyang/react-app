import React, { Component } from 'react'
import "../assets/styles/formBtn.less"
export default class FormBtn extends Component {
  render () {
    return (
      this.props.type === "ordinary" ?
        <a className="forget" href="###">{this.props.children}</a> :
        <button className={`btn ${this.props.isFull ? 'full' : ''}`} onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}
