import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import Img from './Img'
import "../assets/styles/subject.less"
export default class Subject extends Component {
  render () {
    return (
      <div className="flex-container">
        <Flex>
          <Flex.Item><a href="#/list"><Img height="56px" src="java.png" /><p>Java EE</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="ui.png" /><p>全栈UI设计</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="H5.png" /><p>H5前端</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="PHP.png" /><p>PHP全栈</p></a></Flex.Item>
        </Flex>
        <Flex>
          <Flex.Item><a href="#/list"><Img height="56px" src="Python.png" /><p>Python</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="DATA.png" /><p>大数据</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="iOS.png" /><p>ios</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="moreClass.png" /><p>更多课程</p></a></Flex.Item>
        </Flex>
      </div>
    )
  }
}
