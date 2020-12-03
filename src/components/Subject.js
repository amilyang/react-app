import React, { Component } from 'react'
import { Flex } from 'antd-mobile';
import Img from './Img'
import "../assets/styles/subject.less"
import axios from 'axios'
import { connect } from 'react-redux'
class Subject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subject_data: []
    }
  }
  componentDidMount () {
    console.log(this.props)
    axios.get("./server/subject.json").then(res => {
      this.props.init_subject_data(res.data)
      // this.setState({
      //   subject_data: res.data
      // })
    })
  }
  render () {
    return (
      <div className="flex-container">
        <Flex>
          {
            this.props.subject_data.map((item, index) => {
              if (index < 4) {
                return <Flex.Item key={item.id}><a href={"#/list/" + item.id}><Img height="56px" src={item.src} /><p>{item.subjectName}</p></a></Flex.Item>
              }
              return null
            })
          }
          {/* <Flex.Item><a href="#/list"><Img height="56px" src="java.png" /><p>Java EE</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="ui.png" /><p>全栈UI设计</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="H5.png" /><p>H5前端</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="PHP.png" /><p>PHP全栈</p></a></Flex.Item> */}
        </Flex>
        <Flex>
          {
            this.props.subject_data.map((item, index) => {
              if (index >= 4) {
                return <Flex.Item key={item.id}><a href={"#/list/:" + item.id}><Img height="56px" src={item.src} /><p>{item.subjectName}</p></a></Flex.Item>
              }
              return null
            })
          }
          {/* <Flex.Item><a href="#/list"><Img height="56px" src="Python.png" /><p>Python</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="DATA.png" /><p>大数据</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="iOS.png" /><p>ios</p></a></Flex.Item>
          <Flex.Item><a href="#/list"><Img height="56px" src="moreClass.png" /><p>更多课程</p></a></Flex.Item> */}
        </Flex>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    subject_data: state.subject_data
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    init_subject_data (data) {
      const action = {
        type: 'init_subject_data',
        value: data
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Subject)