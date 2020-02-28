import React, { Fragment, Component } from "react";
// 引进顶部导航
import { NavBar, Icon } from "antd-mobile";
// 引进connect，从仓库中获得state的数据
import { connect } from "react-redux";
import { localCityAction } from "../../store/actionCreator";
// 引进axios,发生异步请求
import axios from "axios";

class CitySearch extends Component {
  //  async componentDidMount () {
  //     console.log(this.props.localCity);
  //    const res= await this.getHotcities();

  //    console.table(res.data.body)
  //   }
  async componentDidMount() {
    // 用es6语法，两个异步请求同时进行，等到最后一个拿到数据，再合并
    const res = await Promise.all([this.getHotcities(), this.getAllcities()]);
    //  console.log(res)
    //  1.热门城市
    const hot = res[0].data.body;
    // 2.当前城市
    const city = this.props.localCity;
    // 3.所有城市
    const allCities = res[1].data.body;
    // 所有的城市集合
    let citiesArr = [
      { localCity: [city] },
      { hotCities: hot.map(v => v.label) }
    ];

    allCities.sort((a, b) => {
      return a.short < b.short ? -1 : 1;
    });
    // 循环数组，修改数组
    allCities.forEach((v, i) => {
      // 把每一项的short的第一个字母拿出来再大写
      let fistLetter = v.short[0].toUpperCase();
      //   然后判断citiesArr全集合中是否含有fistLetter属性，有的话找出那一项，没有的话，就添加该属性
      let index = citiesArr.findIndex(val => val.hasOwnProperty(fistLetter));
      //   如果不存在该属性，则添加属性和值
      if (index === -1) {
        citiesArr.push({ [fistLetter]: [v.label] });
      } else {
        // 如果存在的话，则在该属性中添加值
        citiesArr[index][fistLetter].push(v.label);
      }
    });
    console.log(JSON.stringify(citiesArr));
  }

  // 获取热点城市
  getHotcities = () => {
    return axios.get("/area/hot");
  };
  // 获取所有城市
  getAllcities = () => {
    return axios.get("/area/city?level=1");
  };
  render() {
    return (
      <Fragment>
        <div>
          <NavBar
            mode="light"
            icon={<Icon type="left" />}
            onLeftClick={() => this.props.history.go(-1)}
          >
            城市选择
          </NavBar>
        </div>
      </Fragment>
    );
  }
}
const mapStoreToProps = state => {
  return {
    localCity: state.mapReducer.city.name
  };
};

export default connect(mapStoreToProps, null)(CitySearch);
