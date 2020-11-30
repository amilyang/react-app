import React, { Component } from 'react'
import Header from '../components/Header'
import MyListView from '../components/MyListView';
import '../assets/styles/listPage.less'
export default class ListPage extends Component {
  render () {
    return (
      <div className="list-page">
        <Header />
        <div className="sub-list">
          <div className="sub-list-header">相关资讯</div>
          <MyListView />
        </div>
      </div>
    )
  }
}

