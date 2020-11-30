import React, { Component } from 'react'
import Img from '../components/Img'
import { NavBar, SearchBar, Icon } from 'antd-mobile';
import "../assets/styles/header.less"

export default class Header extends Component {
  render () {
    return (
      <div className="header">
        {
          this.props.isDetail ?
            <NavBar
              icon={this.props.isDetail ? <Icon type="left" /> : ''}
              onLeftClick={() => console.log('leftEvent')}
            >
              {<div style={{ marginLeft: "-26px" }}><Img key="0" src="logo.png" height={30} /></div>}
            </NavBar> :
            <NavBar
              leftContent={
                this.props.isFooter ? '' : <Img key="0" src="logo.png" height={30} />
              }
            >
              {this.props.isFooter ? <div style={{ width: "100%", textAlign: "right" }}><Img key="0" src="logo.png" height={30} /></div> : <SearchBar placeholder="Search" maxLength={8} />}
            </NavBar>
        }
      </div>
    )
  }
}
