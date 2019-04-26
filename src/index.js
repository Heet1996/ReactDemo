import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import {counterStore} from './store/reducers/counter';
import {resultStore} from './store/reducers/result';
import thunk from 'redux-thunk';

let rootReducer=combineReducers({ctr:counterStore,res:resultStore});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let logger=(store)=> {
    return next=>{
        return action=>{
            console.log(`Middleware Dispacting : ${action.val}`); 
            let result=next(action);
            console.log(`Store status : ${store}`);
            return result;       
        }
    }
}
//Use to link redux dev tools store to this store 
// let compose=window
let store=createStore(rootReducer,composeEnhancers(applyMiddleware(logger,thunk)));
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
