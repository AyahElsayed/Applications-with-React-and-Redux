import { applyMiddleware, createStore, compose } from 'redux'
import rootReducer from './reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    // const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    
    // this will add suport for redux dev tools
    return createStore(rootReducer, initialState,
        composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())))
    // dont forget this parentcies to invoke it
}
// Redux middleware (optional)
// is a way to enhance Redux's behavior with extra functionality
//this middleware we used helpful becouse it will warn us if we accidentally mutate Redux state