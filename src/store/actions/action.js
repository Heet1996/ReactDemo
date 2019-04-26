export const actionTypes={
    INCREMENT:'INCREMENT',
    DECREMENT:'DECREMENT',
    ADD10:'ADD10',
    SUB15:'SUB15',
    STORE:'STORE',
    DELETE_RESULT:'DELETE_RESULT'
}
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