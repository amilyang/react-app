import React from 'react'
import { Carousel } from 'antd-mobile';

export default class Banner extends React.Component {
  state = {
    data: ['banner1.png', 'banner2.png', 'banner3.jpeg'],
    imgHeight: 176,
  }
  componentDidMount () {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['banner1.png', 'banner2.png', 'banner3.jpeg'],
      });
    }, 100);
  }
  render () {
    return (
      <Carousel
        autoplay={true}
        autoplayInterval={2000}
        infinite
        dots={false}
      >
        {this.state.data.map(val => (
          <a
            key={val}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={require("../assets/images/" + val)}
              alt=""
              style={{ width: '100%', verticalAlign: 'top' }}
              onLoad={() => {
                // fire window resize event to change height
                window.dispatchEvent(new Event('resize'));
                this.setState({ imgHeight: 'auto' });
              }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}