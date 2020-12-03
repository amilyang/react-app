import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'up') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.num1 = action.value
    return newState
  }
  // 1 定义初始state
  return {
    num1: 20
  }
}
// 创建一个仓库,把仓库管理员邀请来管理这个仓库
// 2 创建store仓库
const store = createStore(reducer)

export default class App extends Component {
  constructor(props) {
    super(props)
    // 3 从仓库store中获取数据
    this.state = store.getState()
    this.changeNumUp = this.changeNumUp.bind(this)
    // stor订阅,一旦store数据发生改变,则执行storeChange函数中的代码
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render () {
    return (
      <div>
        {
          // 4. 书写组件,填入数据
        }
        <p>{this.state.num1}</p>
        {
          /* 5.业务:点击让num1自增*/
        }
        <button onClick={this.changeNumUp}>增加</button>
      </div>
    )
  }
  changeNumUp (e) {
    // 6 改变数据的时候,需要调用store的dispatch方法,把新的值作为对象传进入
    // 每次调用dispatch,会在内部调用图书管理员函数reducer
    const action = {
      type: 'up',
      value: this.state.num1 + 1
    }
    store.dispatch(action)
  }
  storeChange (e) {
    this.setState(store.getState)
  }
}


ReactDOM.render(<App />, document.getElementById('root'))