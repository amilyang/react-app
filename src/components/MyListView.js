import React, { Component } from 'react'
import { ListView, PullToRefresh, Toast } from 'antd-mobile';
import SubListItem from '../components/SubListItem'
import { getList } from '../api/upload.js'

export default class MyListView extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2, // rowHasChanged(prevRowData, nextRowData); 用其进行数据变更的比较
    });

    this.state = {
      dataSource,
      pageIndex: 1,
      pageSize: 10,
      isLoading: true,
      refreshing: true,
      hasMore: true,
      dataArr: []
    };
  }
  componentDidMount () {
    this.getData(true)
  }
  async getData (refresh = false) {
    const listParams = {
      pageIndex: this.state.pageIndex,
      pageSize: this.state.pageSize,
      subjectId: this.props.subjectId
    }
    const response = await getList(listParams)
    if (response.code === 200) {
      const dataList = response.results.list
      const len = dataList.length
      if (len < this.state.pageSize) {
        this.setState({
          isLoading: false,
          refreshing: false,
          hasMore: false,
        })
        Toast.info('没有更多数据了~', 1)
        return false
      }
      if (refresh) {
        //这里表示刷新使用
        // 下拉刷新的情况，重新添加数据即可(这里等于只直接用了第一页的数据)
        this.setState({
          pageIndex: this.state.pageIndex,
          dataSource: this.state.dataSource.cloneWithRows(dataList), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
          hasMore: true, // 下拉刷新后，重新允许开下拉加载
          refreshing: false, // 是否在刷新数据
          isLoading: false, // 是否在加载中
          dataArr: dataList // 保存数据进state，在下拉加载时需要使用已有数据
        })
      } else {
        // 这里表示上拉加载更多
        // 合并state中已有的数据和新增的数据
        var dataArr = this.state.dataArr.concat(dataList) //关键代码
        this.setState({
          pageIndex: this.state.pageIndex,
          dataSource: this.state.dataSource.cloneWithRows(dataArr), // 数据源中的数据本身是不可修改的,要更新datasource中的数据，请（每次都重新）调用cloneWithRows方法
          refreshing: false,
          isLoading: false,
          dataArr: dataArr // 保存新数据进state
        })
      }
    }
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({
      isLoading: true,
      pageIndex: this.state.pageIndex + 1
    }, () => {
      this.getData()
    });
  }
  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true, pageIndex: 1 }, () => {
      this.getData(true)
    });
    // 刷新嘛，一般加载第一页，或者按你自己的逻辑（比如每次刷新，换一个随机页码）
  }
  render () {
    const row = (rowData, sectionID, rowID) => {
      return (
        <a href="#/detail">
          <SubListItem item={rowData} />
        </a>
      );
    };
    return (
      <ListView
        // ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        // renderHeader={() => <span>相关资讯</span>}
        renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        // renderSeparator={separator}
        className="am-list"
        // pageSize={4}
        useBodyScroll
        // onScroll={() => { console.log('scroll'); }}
        // scrollRenderAheadDistance={500}
        pullToRefresh={
          <PullToRefresh refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
        }
        onEndReached={this.onEndReached}
      // onEndReachedThreshold={10}
      />
    )
  }
}
