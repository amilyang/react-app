import React, { Component } from 'react'
import Header from '../components/Header'
import Img from '../components/Img'
import SubList from '../components/SubList'
import '../assets/styles/detailPage.less'
import "../assets/fonts/iconfont.css"
import { Flex } from 'antd-mobile'

export default class DetailPage extends Component {
  render () {
    return (
      <div className="detail-page">
        <div className="detail-header">
          <Header isDetail={true} />
        </div>
        <article>
          <h1>React 用于构建用户界面的Javascript库</h1>
          <p>
            <span>作者： 天上的鱼</span>
            <span style={{ float: "right" }}>2020-10-16</span>
          </p>
          <Img src="dt.png" />
          <content>
            <p>（观察者网讯）香港行政长官林郑月娥将于明天（11月25日）发表新一份《施政报告》。在24日出席行政会议前，她表示，《施政报告》会提出200项新措施，今年财赤或高达3100亿港元，因此很多新措施希望通过改革、精简、协同效应，不动用新资源下，为市民提供更好的服务。</p>
            <p>据香港电台报道，林郑月娥今天在出席行政会议前说，新一份《施政报告》继续会以天蓝色作为封面，希望为香港带来更多希望。《施政报告》继续会有“附编”，介绍本届政府3年来以来的政策范畴，图文并茂，希望做到全面交代、一目了然。</p>
            <p>她指出，各界可在《施政报告》中看到她本月初前往北京、广州及深圳时得到支持的各项措施。并认为，如果香港不能有效控制疫情，这些措施便难以开展，因为若不能恢复与内地、外地的人流往还，在香港本地亦难以开展活动，很难推展各项有利民生及经济的措施。</p>
            <p>林郑月娥说，过去三份《施政报告》提出700项新措施，当中约95%已完成或按序进行，其余会加紧赶上，但部分未能做到并非政府可控制，因过去一年立法会议事时间较少，很多时间用来“拉布”（即拖延时间），因此未来一年尽可能争取时间多做工作。</p>
          </content>
          <p style={{ padding: "5px 0" }}>
            <span>
              <i className="iconfont icon-time"></i> 6536人观看
            </span>
            <span style={{ float: "right" }}>
              <i className="iconfont icon-time"></i> 我要举报
            </span>
          </p>
        </article>
        <SubList />
        <div className="comments">
          <div className="comments-header">热门评论</div>
          <Flex className="comments-item">
            <Flex.Item className="comments-item-left">
              <Img src="avatar.jpg" height={80} />
            </Flex.Item>
            <Flex.Item className="comments-item-right">
              <p className="item-header">
                <strong>爱学习的孩子</strong>
                <span>
                  3
                  <i className="iconfont icon-dianzan"></i>
                </span>
              </p>
              <p>我们应该在组件的哪一个生命周期方法中发送网络请求呢？</p>
            </Flex.Item>
          </Flex>
        </div>
      </div>
    )
  }
}
