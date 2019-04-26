import {actionTypes} from '../actions/action';
let initialState={
    result:[]
}
let resultStore=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.STORE:state={...state,result:state.result.concat({id:new Date(),value:action.counter})};  
                                return state
        case actionTypes.DELETE_RESULT:let newState=state.result.filter((result)=>result.id!==action.rid);
                                        state={...state,result:newState};
                                        return state;             
        default: return state
    }
}
export {resultStore};