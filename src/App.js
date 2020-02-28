import React, { Fragment, Component } from "react";
// 引入路由
import {
  Route,
  HashRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
// 引入tap栏（Home）
import Home from "./pages/home/index";
// 引入地图搜索
import MapCity from "./pages/mapCity";
// 引进城市搜索页
import CitySearch from './pages/citySearch'
// 引进localCityAction
import {localCityAction} from './store/actionCreator/index';
// 引进connect
import {connect} from 'react-redux';


// 第二遍测试
// import {LocalCity,getLocalCity} from './utils/mapHelper'

class App extends Component {
  componentDidMount(){
    // 获取当前定位
        
        // 第二遍测试
        // LocalCity()
        // .then(res=>{
        //   console.log(res)
        // })
        this.props.handleInitCity();
      //  getLocalCity()
      //  .then(res=>{
      //    console.log(res)
      //  })
  }
  render() {
    return (
      <Fragment>
        <div className="App">
          {this.props.cityname&&<Router>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/mapCity" component={MapCity}></Route>
              {/* 配置城市搜索的路由 */}
              <Route path='/citySearch' component={CitySearch}></Route>
              {/* 当路由为/，重定向到home页面 */}
              <Route path="/" exact>
                <Redirect to="/home"></Redirect>
              </Route>
            </Switch>
          </Router>}
        </div>
      </Fragment>
    );
  }
}
// 事件的映射
const mapDispatchTOProps = (dispatch)=>{
  return{
    handleInitCity(){
      // localCityAction是一个函数
      dispatch(localCityAction())
    }
  }

}

// 拿到state的数据，以此判断页面是否能生成
const mapstoreToprops = (state)=>{
  return{
    cityname:state.mapReducer.city.name
  }
}
export default connect(mapstoreToprops,mapDispatchTOProps)(App) ;
