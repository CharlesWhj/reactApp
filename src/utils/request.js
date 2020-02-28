import axios from "axios";
// 引进toast,显示数据正在加载中
import { Toast } from "antd-mobile";
// 把基准路径暴露出去
export const BaseUrl = "http://157.122.54.189:9060";
// 添加请求拦截器
//同时发送多个请求获取数据怎么办？在拦截器中设置计数器
let requestNum = 0;
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么(提示用户正在加载中)
    Toast.loading("正在加载中");
    // 每发一次请求数量加1
    requestNum++;
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么（提示用户加载数据接结束）
    // 每一次请求回来，数量减1
    requestNum--;
    // 当全部请求都返回了，就停止显示Toast
    if (requestNum === 0) {
      Toast.hide();
    }
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = BaseUrl;
// 把新的axios暴露出去
export default axios;
