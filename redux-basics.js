const redux=require('redux');
//Reducer
const rootReducer=(state={counter:2},action)=>{
    if(action.type=='INC_COUNTER')
    {
        return {...state,counter:state.counter+1}
    }
    if(action.type=='ADD_COUNTER')
    {
        return {...state,counter:state.counter+action.value}
    }
    return state;
}
//Store
const createStore=redux.createStore;

const store=createStore(rootReducer);
//Action from Component
store.dispatch({type:'INC_COUNTER'});
store.dispatch({type:'ADD_COUNTER',value:10});
//Subscription
console.log(store.getState());