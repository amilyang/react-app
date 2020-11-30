import React, { Component } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Subject from '../components/Subject'
import Img from '../components/Img'
import SubList from '../components/SubList'
import { Flex, Tabs, List } from 'antd-mobile';
import "../assets/styles/homePage.less"
import "../assets/fonts/iconfont.css"
const Item = List.Item
const tabs = [
  { title: '产品' },
  { title: '出行' },
  { title: '深度' },
];
export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render () {
    return (
      <div className="home-page">
        <Header />
        <Banner />
        <Subject />
        <SubList />
        <div className="tabs">
          <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
            <div>
              <Flex className="tab-flex">
                <Flex.Item className="tab-left">
                  <Img src="banner1.png" height="60px" />
                </Flex.Item>
                <Flex.Item className="tab-right">
                  <h3>叩丁狼与大连工业大学举行校企合作签约仪式！</h3>
                  <p>
                    <span><i className="iconfont icon-time"></i>2小时前</span>
                    <span><i className="iconfont icon-browse"></i>63</span>
                  </p>
                </Flex.Item>
              </Flex>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
            </div>
            <div>
              <Flex className="tab-flex">
                <Flex.Item className="tab-left">
                  <Img src="banner1.png" height="60px" />
                </Flex.Item>
                <Flex.Item className="tab-right">
                  <h3>叩丁狼与大连工业大学举行校企合作签约仪式！</h3>
                  <p>
                    <span><i className="iconfont icon-time"></i>2小时前</span>
                    <span><i className="iconfont icon-browse"></i>63</span>
                  </p>
                </Flex.Item>
              </Flex>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
            </div>
            <div>
              <Flex className="tab-flex">
                <Flex.Item className="tab-left">
                  <Img src="banner1.png" height="60px" />
                </Flex.Item>
                <Flex.Item className="tab-right">
                  <h3>叩丁狼与大连工业大学举行校企合作签约仪式！</h3>
                  <p>
                    <span><i className="iconfont icon-time"></i>2小时前</span>
                    <span><i className="iconfont icon-browse"></i>63</span>
                  </p>
                </Flex.Item>
              </Flex>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
              <Item arrow="horizontal" onClick={() => { }}>
                叩丁狼与大连工业大学举行校企合作签约仪式！</Item>
            </div>
          </Tabs>
        </div>
        <Header isFooterl />
        <div className="footer">
          <p>版权所有：2020-2021 广州叩丁狼教育</p>
          <p>ICP备案：粤ICP备17147191号</p>
          <p>粤公网安备 44010602006219号</p>
        </div>
      </div>
    )
  }
}
