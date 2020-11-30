import React, { Component } from 'react'
import { ListView } from 'antd-mobile';
import SubListItem from '../components/SubListItem'
const data = [
  {
    img: 'java.png',
    title: 'Meet hotel',
    desc: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'java.png',
    title: 'McDonald\'s invites you',
    desc: '不是所有的兼职汪都需要风吹日晒',
  },
  {
    img: 'java.png',
    title: 'Eat the week',
    desc: '不是所有的兼职汪都需要风吹日晒',
  },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData (pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = (pIndex * NUM_ROWS) + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}
export default class MyListView extends Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      dataSource,
      isLoading: true,
    };
  }
  componentDidMount () {
    // you can scroll to the specified position
    // setTimeout(() => this.lv.scrollTo(0, 120), 800);

    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 600);
  }
  onEndReached = (event) => {
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    if (this.state.isLoading && !this.state.hasMore) {
      return;
    }
    console.log('reach end', event);
    this.setState({ isLoading: true });
    setTimeout(() => {
      debugger
      this.rData = { ...this.rData, ...genData(++pageIndex) };
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        isLoading: false,
      });
    }, 1000);
  }
  render () {
    let index = data.length - 1;
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1;
      }
      const obj = data[index--];
      return (
        <a href="#/detail">
          <SubListItem item={obj} />
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
        onEndReached={this.onEndReached}
      // onEndReachedThreshold={10}
      />
    )
  }
}
