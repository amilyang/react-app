import React, { Component } from 'react'
import '../assets/styles/loginPage.less'
import Img from '../components/Img'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'
import { Toast } from 'antd-mobile'

export default class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      // clickEvent: ''
    }
    // this.changeUsername = this.changeUsername.bind(this)
    // this.changePwd = this.changePwd.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.loginEvent = this.loginEvent.bind(this)
  }
  // changeUsername (e) {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }
  // changePwd (e) {
  //   this.setState({
  //     password: e.target.value
  //   })
  // }
  handleInputChange (e) {
    e.persist();
    this.setState({
      // 使用属性名称表达式
      [e.target.name]: e.target.value
    })
  }
  handleClick (event) {
    console.log(event);
    console.log(event.type)
    const eventType = event.type;

    setTimeout(function () {
      console.log(event.type)
      console.log(eventType)
    }, 0)
    this.setState({
      clickEvent: event
    })
    this.setState({
      eventType: event.type
    })
  }
  loginEvent (e) {
    e.preventDefault();
    let data = { ...this.state }
    if (data.username === 'aaa' && data.password === '111') {
      this.props.router.push('/home')
    } else {
      Toast.fail('登录失败', 1);
    }
  }
  render () {
    return (
      <div className="login-page">
        <div className="logo">
          <Img src="logo.png" alt="" />
        </div>
        <form action="" className="login-form">
          <FormInput icon="shouji" type="text" placeholder="用户名" name="username" value={this.state.username} onChange={this.handleInputChange} />
          <FormInput icon="mima" type="password" placeholder="密码" name="password" value={this.state.password} onChange={this.handleInputChange} />
          <FormBtn isFull={true} onClick={this.loginEvent}>登录</FormBtn>
          <FormBtn type="ordinary">忘记密码</FormBtn>
          <div>
            <FormBtn>免费注册</FormBtn>&emsp;
            <FormBtn>游客登录</FormBtn>
          </div>
        </form>
        <button onClick={this.handleClick.bind(this)}>测试</button>
      </div>
    )
  }
}

