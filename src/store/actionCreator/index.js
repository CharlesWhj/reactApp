// 引进获取定位函数的函数
import {LocalCity} from '../../utils/mapHelper'

export const localCityAction = ()=>{
    return (dispatch)=>{
        LocalCity()
        .then(res=>{
            const action = {
                type:'initCity',
                value:res
            }
            dispatch(action)
        })
    }
}