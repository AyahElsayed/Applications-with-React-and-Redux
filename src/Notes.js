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