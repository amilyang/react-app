import React, { Component } from 'react'
import "../assets/styles/formInput.less"
import "../assets/fonts/iconfont.css"
export default class FormInput extends Component {
  render () {
    return (
      <div className="input-group">
        <i className={"iconfont icon-" + this.props.icon}></i>
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    )
  }
}
