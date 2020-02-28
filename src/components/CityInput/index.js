// 城市搜索组件
import React, { Fragment, Component } from "react";
// 引入组件局部样式
import InputCss from "./index.module.scss";

import {connect} from 'react-redux';

// 引进withRouter给没有路由的子组件配置路由
import {withRouter} from 'react-router-dom'

class CityInput extends Component {
  render() {
    return (
      <Fragment>
        <div className={InputCss.inputSearch}>
          <div className={InputCss.CityInput}>
            <div className={InputCss.city} onClick={()=>{
              this.props.history.push('/citySearch')
            }}>
              <span>{this.props.cityName}</span>
              <i className={InputCss["icon-arrow"] + ' iconfont icon-arrow'}></i>
            </div>
            <div className={InputCss.area}>
              <i className={InputCss["icon-seach"] + ' iconfont icon-seach'}></i>
              <span>请输入小区或地址</span>
            </div>
          </div>
          <div className={InputCss.littleMan}>
              <i className={InputCss["icon-map"] + ' iconfont icon-map'}></i>
          </div>
        </div>
      </Fragment>
    );
  }
}

// 获取当前城市数据
const mapStoreToProps=(state)=>{
    return{
        cityName:state.mapReducer.city.name
    }
}
export default withRouter(connect(mapStoreToProps,null)(CityInput));
