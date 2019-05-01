import {actionTypes} from './action';

let save=({counter})=>{
    return {
        type:actionTypes.STORE,
        counter:counter
    }
}
export let store=({counter})=>{
   return dispacth=>{
       setTimeout(()=>{
            dispacth(save({counter}))
       },2000)
   }
}
export let delete_record=({id})=>{
    return {
        type:actionTypes.DELETE_RESULT,
        rid:id
    }
}