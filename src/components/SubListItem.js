import { Flex } from 'antd-mobile'
import { Component } from 'react'
// import Img from '../components/Img'
export default class SubListItem extends Component {
  render () {
    return (
      <Flex className="sub-list-item">
        <Flex.Item className="sub-list-item-left">
          {/* <Img src={this.props.item.image} alt="" height="80px" /> */}
          <img src={this.props.item.image} alt="" />
        </Flex.Item>
        <Flex.Item className="sub-list-item-right">
          <h3>{this.props.item.id + this.props.item.title}</h3>
          <p>{this.props.item.content}</p>
        </Flex.Item>
      </Flex>
    )
  }
}