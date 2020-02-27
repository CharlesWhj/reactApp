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
// 引进localCityAction
import {localCityAction} from './store/actionCreator/index';
// 引进connect
import {connect} from 'react-redux'

// 第二遍测试
// import {LocalCity} from './utils/mapHelper'

class App extends Component {
  componentDidMount(){
    // 获取当前定位
        
        // 第二遍测试
        // LocalCity()
        // .then(res=>{
        //   console.log(res)
        // })
        this.props.handleInitCity();
  }
  render() {
    return (
      <Fragment>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/home" component={Home}></Route>
              <Route path="/mapCity" component={MapCity}></Route>
              {/* 当路由为/，重定向到home页面 */}
              <Route path="/" exact>
                <Redirect to="/home"></Redirect>
              </Route>
            </Switch>
          </Router>
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
export default connect(null,mapDispatchTOProps)(App) ;
