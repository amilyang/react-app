import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// export default class App extends Component {
//   render () {
//     return (
//       // <LoginPage />
//       // <HomePage />
//       // <ListPage />
//       <DetailPage />
//     )
//   }
// }
const defaultState = {
  subject_data: []
}
const reducer = (state = defaultState, action) => {
  if (action.type === 'init_subject_data') {
    let newsState = JSON.parse(JSON.stringify(state))
    newsState.subject_data = action.value
    return newsState
  }
  return state
}
const store = createStore(reducer)
const appRouter = <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={LoginPage} />
    <Route path="/home" component={HomePage} />
    <Route path="/list/:id" component={ListPage} />
    <Route path="/detail" component={DetailPage} />
  </Router>
</Provider>

ReactDOM.render(appRouter, document.getElementById('root'))