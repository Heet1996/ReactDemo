export default function applyMiddleware(...middlewares) {
  return (next) => 
    (reducer, initialState) => {
      var store = next(reducer, initialState);
      var dispatch = store.dispatch;
      var chain = [];
      var middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      };
      chain = middlewares.map(middleware =>
                       middleware(middlewareAPI));
      dispatch = compose(...chain, store.dispatch);
      return {
        ...store,
        dispatch
      };
   };
}