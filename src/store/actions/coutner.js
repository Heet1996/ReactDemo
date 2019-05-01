import {actionTypes} from './action';
export let increment=()=>{
    return {
        type:actionTypes.INCREMENT
    };
}
export let decrement=()=>{
return {
    type:actionTypes.DECREMENT
}
}
export let add10=({val})=>{
    return {
        type:actionTypes.ADD10,
        val:val
    }
}
export let sub15=({val})=>{
return {
    type:actionTypes.SUB15,
    val:val
}
}