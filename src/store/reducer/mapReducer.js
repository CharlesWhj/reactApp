const defaultState={
    city:{
        // 城市名称
        // 经纬度
    }
}
export default (state=defaultState,action)=>{
    let newState =JSON.parse(JSON.stringify(state)) 
    if(action.type==='initCity'){
        newState.city=action.value
        return newState
    }
    return state
}