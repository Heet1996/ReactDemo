import {actionTypes} from '../actions/action';
import {updateObject} from '../utilities';
let initialState={
    result:[]
}
let resultStore=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.STORE: return updateObject(state,{result:state.result.concat({id:new Date(),value:action.counter})}) 
                                
        case actionTypes.DELETE_RESULT:let newState=state.result.filter((result)=>result.id!==action.rid);
                                       return updateObject(state,{result:newState});
                                                    
        default: return state
    }
}
export {resultStore};