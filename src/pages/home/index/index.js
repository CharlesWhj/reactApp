import React, { Fragment, Component } from "react";
// 引进封装好的请求
// import axios from "axios";
import axios,{BaseUrl} from '../../../utils/request'
// 引进轮播图
import { Carousel } from "antd-mobile";
// 引进局部样式
import Indexcss from "./index.module.scss";
// 引入顶部导航相对路径
import nav1 from "../../../assets/images/nav-1.png";
import nav2 from "../../../assets/images/nav-2.png";
import nav3 from "../../../assets/images/nav-3.png";
import nav4 from "../../../assets/images/nav-4.png";
// 引进组件
import CityInput from '../../../components/CityInput';

class Index extends Component {
  state = {
    swiperList: [],
    imgHeight: 176,
    // 顶部导航数据
    navTopList: [
      {
        imgSrc: nav1,
        navContent: "整租"
      },
      {
        imgSrc: nav2,
        navContent: "合租"
      },
      {
        imgSrc: nav3,
        navContent: "地图找房"
      },
      {
        imgSrc: nav4,
        navContent: "去出租"
      }
    ],
    // 租房小组数据
    rendList: [],
    // 最新资讯
    newsList: []
  };
  componentDidMount() {
    this.getSwiperList();
    // 获取租房小组数据
    this.getrendList();
    // 获取最新资讯数据
    this.getnewsList();
  }
  // 获取轮播图数据
  getSwiperList = () => {
    axios.get("/home/swiper").then(res => {
      // 把数据存到起来
      this.setState({
        swiperList: res.data.body
      });
    });
  };
  // 获取租房小组数据
  getrendList = () => {
    axios.get("/home/groups").then(res => {
      // 把数据存到起来
      this.setState({
        rendList: res.data.body
      });
      // console.log(res)
    });
  };
  // 获取最新资讯数据
  getnewsList = () => {
    axios.get("/home/news").then(res => {
      // 把数据存到起来
      this.setState({
        newsList: res.data.body
      });
      console.log(res);
    });
  };

  render() {
    return (
      <Fragment>
        {/* 轮播图开始 */}
        <div className={Indexcss.swiper}>
          {/* 城市搜索部分 */}
        <div className={Indexcss.searchInput}>
        <CityInput></CityInput>
        </div>
          {this.state.swiperList.length && (
            <Carousel autoplay infinite>
              {this.state.swiperList.map(val => (
                <a
                  key={val.id}
                  href="http://www.alipay.com"
                  style={{
                    display: "inline-block",
                    width: "100%",
                    height: this.state.imgHeight
                  }}
                >
                  <img
                    src={BaseUrl + val.imgSrc}
                    alt=""
                    style={{ width: "100%", verticalAlign: "top" }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event("resize"));
                      this.setState({ imgHeight: "auto" });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          )}
        </div>

        {/* 顶部导航开始 */}
        <div className={Indexcss.navtap}>
          {/* 循环数组，动态生成 */}
          {this.state.navTopList.map((v, index) => (
            <div className={Indexcss.navtapItem} key={index}>
              <img src={v.imgSrc} className={Indexcss.navPic}></img>
              <p className={Indexcss.navTitle}>{v.navContent}</p>
            </div>
          ))}
        </div>

        {/* 租房小组开始 */}
        <div className={Indexcss.RentGroud}>
          <div className={Indexcss.RentTitle}>
            <h3>租房小组</h3>
            <a href="#">更多</a>
          </div>
          <div className={Indexcss.flooList}>
            {this.state.rendList.map(v => (
              <div className={Indexcss.floorItem} key={v.id}>
                <div className={Indexcss.floorItem_L}>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
                <div className={Indexcss.floorItem_R}>
                  <img src={BaseUrl + v.imgSrc}></img>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 最新资讯开始 */}
        <div className={Indexcss.newistMsg}>
          <h3>最新资讯</h3>
          {this.state.newsList.map(v=>(
            <div className={Indexcss.newistContent} key={v.id}>
            <div className={Indexcss.newistPic}>
              <img src={BaseUrl + v.imgSrc}></img>
            </div>
            <div className={Indexcss.contentRight}>
              <div className={Indexcss.title}>
                {v.title}
              </div>
              <div className={Indexcss.sorts}>
                <span>新华网</span>
                <span>一周前</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default Index;
