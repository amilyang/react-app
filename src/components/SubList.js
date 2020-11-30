import React, { Component } from 'react'
import SubListItem from '../components/SubListItem'

const sub_list_data = [
  {
    img: 'java.png',
    title: '用于构建用户界面的javascript库',
    desc: '组件路基使用javascript编写而非模板，你可以轻松地在应用中传递数据，并使得状态与DOM分离'
  },
  {
    img: 'java.png',
    title: '用于构建用户界面的javascript库',
    desc: '组件路基使用javascript编写而非模板，你可以轻松地在应用中传递数据，并使得状态与DOM分离'
  },
  {
    img: 'java.png',
    title: '用于构建用户界面的javascript库',
    desc: '组件路基使用javascript编写而非模板，你可以轻松地在应用中传递数据，并使得状态与DOM分离'
  },
  {
    img: 'java.png',
    title: '用于构建用户界面的javascript库',
    desc: '组件路基使用javascript编写而非模板，你可以轻松地在应用中传递数据，并使得状态与DOM分离'
  }
]
export default class SubList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sub_list_data
    }
  }
  render () {
    return (
      <div className="sub-list">
        <div className="sub-list-header">相关资讯</div>
        {
          this.state.sub_list_data.map((item, index) => {
            return (
              <div key={index}>
                <SubListItem item={item} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
