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

class App extends Component {
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

export default App;
