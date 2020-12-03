import React, { Component } from 'react'
import "../assets/styles/formInput.less"
import "../assets/fonts/iconfont.css"
export default class FormInput extends Component {
  render () {
    return (
      <div className="input-group">
        <i className={"iconfont icon-" + this.props.icon}></i>
        <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
      </div>
    )
  }
}
