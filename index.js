// action types

var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';



// actions

var incrementAction = {
    type: INCREMENT
};

var decrementAction = {
    type: DECREMENT
};


// reducers

var initialState = 0;

var counterReducer = function(state, action) {
    if(typeof state === 'undefined') {
        return initialState;
    }

    switch(action.type) {
    case INCREMENT:
        return state + 1;
    case DECREMENT:
        return state - 1;
    default:
        return state;
    }
};



// store

var store = Redux.createStore(counterReducer);
var value = document.getElementById('value');
var render = function() {
    value.innerHTML = store.getState().toString();
};

render();
store.subscribe(render);

document.getElementById('Increment')
    .addEventListener('click', function(){
        store.dispatch(incrementAction);
    });

document.getElementById('Decrement')
    .addEventListener('click', function(){
        store.dispatch(decrementAction);
    });

document.getElementById('asyncIncrement')
    .addEventListener('click', function(){
        setTimeout( function() {
            store.dispatch(incrementAction);
        }, 1000);
    });
