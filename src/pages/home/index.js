import React  from 'react'
import { TabBar } from 'antd-mobile';
// 引入路由
import {Route} from 'react-router-dom';
// 引入相关组件
import Index from './index/index';
import Found from './found/index';
import News from './news/index';
import My from './my/index';

class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    //   selectedTab: 'redTab'
    };
    console.log(this.props);
    // 判断一下页面的路由是否是home,如果是home的话，则默认跳到首页
    if(this.props.match.path==="/home"){
        this.props.history.push('/home/index')
    }
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={<span className='iconfont icon-ind'></span>}
            selectedIcon={<span className='iconfont icon-ind'></span>}
            selected={this.props.location.pathname==="/home/index"}
            onPress={() => {
                this.props.history.push('/home/index')
            }}
          >
              {/* 渲染首页的index页面 */}
              <Route path='/home/index' component={Index}></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={<span className='iconfont icon-findHouse'></span>}
            selectedIcon={<span className='iconfont icon-findHouse'></span>}
            title="找房"
            key="found"
            selected={this.props.location.pathname==="/home/found"}
            onPress={() => {
                this.props.history.push('/home/found')
            }}
          >
              {/* 渲染首页的found页面 */}
            <Route path='/home/found' component={Found}></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={<span className='iconfont icon-infom'></span>}
            selectedIcon={<span className='iconfont icon-infom'></span>}
            title="咨询"
            key="apply"
            selected={this.props.location.pathname==='/home/news'}
            onPress={() => {
                this.props.history.push('/home/news')
            }}
          >
            {/* 渲染首页的news页面 */}
            <Route path='/home/news' component={News}></Route>
          </TabBar.Item>
          <TabBar.Item
            icon={<span className='iconfont icon-myinfo'></span>}
            selectedIcon={<span className='iconfont icon-myinfo'></span>}
            title="我的"
            key="my"
            selected={this.props.location.pathname==='/home/my'}
            onPress={() => {
                this.props.history.push('/home/my')
            }}
          >
            {/* 渲染首页的my页面 */}
            <Route path='/home/my' component={My}></Route>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default TabBarExample;