// const BMap = window.BMap;

// export const LocalCity =()=>{
//     return new Promise((resolve,reject)=>{
//         var myCity = new BMap.LocalCity();
//         myCity.get((result)=> {
//             // 把市去掉
//             result.name=result.name.replace('市','')

//             if(result.name.length>=3){
//                 result.name=result.name.slice(0,2)
//             }
//             resolve(result)
//             console.log(result);
//         });
//     })
// }

// 第二遍

// 1.封装函数，准确获取当前的城市1

const BMap = window.BMap;
const geolocation = new BMap.Geolocation();
//  创建一个函数，并暴露出去
export const LocalCity = () => {
  // 返回一个Promise对象
  return new Promise((resolve, reject) => {
    var myCity = new BMap.LocalCity();
    myCity.get(result => {
      console.log(result);
      result.name = result.name.replace("市", "");
      if (result.name.length >= 3) {
        result.name = result.name.slice(0, 2);
      }
      // 如果成功则把result作为返回值
      resolve(result);
    });
  });
};

// 获取城市经纬度
export const LocalCityCoords = () => {
  return new Promise((resolve, reject) => {
    // 开启SDK辅助定位
    geolocation.enableSDKLocation();
    geolocation.getCurrentPosition(function(r) {
      if (this.getStatus() == window.BMAP_STATUS_SUCCESS) {
        //   console.log(r)
        resolve(r);
      } else {
        alert("failed" + this.getStatus());
        reject(r);
      }
    });
  });
};

// 获取城市的详细信息
export const LocationCity = r => {
  return new Promise((resolve, reject) => {
    let myGeo = new BMap.Geocoder();
    myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), function(
      result
    ) {
      if (result) {
        resolve(result);
      } else {
        reject(result);
      }
    });
  });
};

// 2.准确获取当前的城市2

export const getLocalCity = () => {
  return new Promise(async (resolve, reject) => {
    const r = await LocalCityCoords();
    const res = await LocationCity(r);
    resolve(res);
  });
};
