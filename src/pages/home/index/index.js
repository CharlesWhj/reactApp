import React, { Fragment, Component } from "react";
// 引进请求
import axios from 'axios';
// 引进轮播图
import {Carousel} from 'antd-mobile'

class Index extends Component {
  state={
    swiperList:[],
    imgHeight: 176,
  }
  componentDidMount(){
    this.getSwiperList()
  }
  // 获取轮播图数据
  getSwiperList=()=>{
    axios.get("http://157.122.54.189:9060/home/swiper")
    .then(res=>{
      // 把数据存到起来
      this.setState({
        swiperList:res.data.body
      })
    })
  }
  render() {
    return (
    <Fragment>
      {this.state.swiperList.length && (<Carousel
        autoplay
        infinite
      >
        {this.state.swiperList.map(val => (
          <a
            key={val.id}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
          >
            <img
              src={"http://157.122.54.189:9060"+val.imgSrc}
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
      </Carousel>)}
    </Fragment>
    );
  }
}

export default Index;