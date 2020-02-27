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

// 封装函数，获得当前定位的城市

const BMap = window.BMap;
//  创建一个函数，并暴露出去
export const LocalCity = ()=>{
    // 返回一个Promise对象
    return new Promise(
        (resolve,reject)=>{
            var myCity = new BMap.LocalCity();
            myCity.get(result=>{
                console.log(result)
                result.name=result.name.replace('市','');
                if(result.name.length>=3){
                    result.name=result.name.slice(0,2)
                }
                // 如果成功则把result作为返回值
                resolve(result)
            });
        })
}