import {actionTypes} from '../actions/action';
import {updateObject} from '../utilities';

let initialState={
    counter:0
}
let counterStore=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionTypes.INCREMENT :return updateObject(state,{counter:state.counter+1});
        
        case actionTypes.DECREMENT :return updateObject(state,{counter:state.counter-1});

        case actionTypes.ADD10 : return updateObject(state,{counter:state.counter+action.val});
        
        case actionTypes.SUB15: return updateObject(state,{counter:state.counter-action.val});
                                           
        default: return state
        
    }
    
}
export {counterStore};