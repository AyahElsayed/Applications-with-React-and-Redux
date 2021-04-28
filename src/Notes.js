/* 
Redux : 3 principles
=================
1- One immutable store
    application state is placed in a single immutable store 
    immutable => mean that state can't be changed directly 

2- Actions trigger changes
    the only way to change state is to emit an action

3- Reducers update state
    state changes and handled by pure functions thes functions are called reducers 
*/


/*
Actions => ( Events )
==================
containing a description of an event
must have a type property
*/

/*
store:
======
create a store by calling createStore in the app's entry point
pass the createStore function to reducer function
only one store in Redux
store API => 
    # store.dispatch(action)
    # store.subscribe(listener)
    # store.getState()
    #replaceReducer( nextReducer )
*/

/*
Immutability:
==============
- To change state , return a new object 
- can't change state directly but make an updated copy

* Mutable in JS
==============
- immutable already =>
    [Number, string, Boolean, Undefined, Null]
    every time i change the value of one of these types, a new copy is created
- mutable =>
    [Objects, Arrays, Functions]
*/

/*
Handling immutable Data in JS
===============================
( creat a copy of existing object)
    1- object.assign
    2- spread operator { ...nyObj }
    3- immutable-friengly array methods
    ( map, filter, reduce)
*/

/*
Handling Arrays:
===============
Avoid:
    - push 
    - pop
    - reverse
this methods , must clone the array first to avoid mutating the original array 

prefer:
    - map
    - filter
    - reduce 
    - concat
    - spread
this methods return a new array 
*/

/*
immer:
=====
    library to handling imutable state
*/

/*
Reducer:
========
- it's a function that takes state in an action and returns new state
- must be pure functions
    this means that they should produce no side effects
pure function => if calling it with the same set of arguments always returns the same value

three things that you should never do in a reducer
===================================================
1- mutate arguments 
2- perform side effects like API calls or routing transition
3- call non-pure functions such as date.now, math.random


- reducers should return an updated copy of state
- Redux will use that copy to update the store 
*/

/* 
Two component types
====================

    container                       |   presentation

    - focue on how things work      |  - focue on how things look
    - aware of Redux                |  - unaware of Redux
    - subscribe to Redux state      |  - Read data from props
    - dispatch Redux actions        |  - invoke callbaks on props

*/

/*
Connecting React to Redux
=========================
React-Redux library handle the store with react ,
it connects react continer components to redux
*/

/*
React-Redux library
===================
consists of two core items

provider component                  |  connect function
- wraps entire app                  |   - connect react components to redux store
- attaches app to store             |   - creates container components 

- wrapping the app in provider      | -
makes the redux store accessible 
to every component in the app

*/

/*
connect function
=============
- accepts two parameters, both are functions
- export default connect(mapStateToProps , mapDispatchToProps)(myPage)
    mapStateToProps (props) => 
        - what state do you want to pass to your compponent as props
        - returns an object
    mapDispatchToProps(dispatch) => 
        what actions do you want on props
*/

/*
4 ways to Handle mapDispatchToProps
===================================
    1- ignore it [ it's an optional argument when you call connect function]
    2- wrap manually
    3- bindActionCreators
    4- Return object [declare mapDispatchToProps as an object instead of as a function]
*/

/*
initial Redux setup
===================
    1- create actions
    2- create reducer
    3- create root reducer
    4- configure store
    5- instantiate store
    6- connect component
    7- pass props via connect 
    8- dispatch action


Add feature
============
    1- create action
    2- enhance reducer
    3- connect component
    4- dispatch action
*/

/*
Mock Api ==> simulation for real Api
- json-server simulates a database by writing to db.json

mock db (db.json file)
=====================
    - is created each time we start the api 
    - this assures the pi starts with good data

start the api by run [ npm run start:api] in the command
- we can update, post, delete 
*/

/*
Redux Middleware
=================
    - runs in between dispatching an action and the moment that it reaches the reducer
    - action => middleware => reducer
    - is a handy way to enhance Redux's behavior

we're going to use some existing popular middleware to handle async API calls 
*/

/*
4 libraries to handlling async
==============================
    - redux-thunk [ return functions from action creators instead of objects]
    - redux-promise [ use promises for async ]
    - redux-observable [ use RxJS observables ]
    - redux-saga [ use generators ]
*/

/*
thunk
======
    -is a function that return a funtion 
    - wraps an expression to delay its evaluation
    - redux thunk has access to the store 
    - your components can call sync and async actions the same way 
*/

/*
if we declare mapDispatchToProps as an object instead of a function,
each property will automatically be bound to dispatch 
*/
