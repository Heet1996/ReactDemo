import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import {increment,decrement,add10,sub15,store,delete_record} from '../../store/actions/action';

class Counter extends Component {
   

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="ADD10" clicked={this.props.onAddCounter}  />
                <CounterControl label="SUB15" clicked={this.props.onSubtractCounter}  />
                <hr/>
                <button onClick={()=>this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>

                {   
                    this.props.storeResult
                    .map((result)=><li 
                                    key={result.id} 
                                    onClick={()=>this.props.onDeleteResult(result.id)}>
                                    {result.value}
                                    </li>)
                }
                    
                </ul>
            </div>
            
            

            );
    }
}

let mapStatetoProps=(state)=>{
    
    return {
        ctr: state.ctr.counter,
        storeResult:state.res.result
    }
}
let mapDispatchtoProps=(dispatch)=>{
    return {
        onIncrementCounter:()=>dispatch(increment()),
        onDecrementCounter:()=>dispatch(decrement()),
        onAddCounter:()=>dispatch(add10({val:10})),
        onSubtractCounter:()=>dispatch(sub15({val:15})),
        onStoreResult:(counter)=>dispatch(store({counter})),
        onDeleteResult:(id)=>dispatch(delete_record({id}))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);