import {actionTypes} from '../actions/action';
let initialState={
    counter:0
}
let counterStore=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.INCREMENT :state={...state,counter:state.counter+1};
                                    return state;
        
        case actionTypes.DECREMENT :state={...state,counter:state.counter-1};
                                    return state;
        case actionTypes.ADD10 : state={...state,counter:state.counter+action.val};
                                return state
        
        case actionTypes.SUB15: state={...state,counter:state.counter-action.val};
                                return state           
        default: return state
        
    }
    
}
export {counterStore};