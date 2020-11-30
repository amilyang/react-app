import React, { Component } from 'react'
import '../assets/styles/loginPage.less'
import Img from '../components/Img'
import FormInput from '../components/FormInput'
import FormBtn from '../components/FormBtn'
import { Link } from 'react-router'

export default class LoginPage extends Component {
  render () {
    return (
      <div className="login-page">
        <div className="logo">
          <Img src="logo.png" alt="" />
        </div>
        <form action="" className="login-form">
          <FormInput icon="shouji" type="text" placeholder="用户名" />
          <FormInput icon="mima" type="password" placeholder="密码" />
          <Link to="/home"><FormBtn isFull={true}>登录</FormBtn></Link>
          <FormBtn type="ordinary">忘记密码</FormBtn>
          <div>
            <FormBtn>免费注册</FormBtn>&emsp;
            <FormBtn>游客登录</FormBtn>
          </div>
        </form>
      </div>
    )
  }
}

