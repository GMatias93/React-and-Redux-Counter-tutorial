// action types

var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';



// action creators

var incrementAction = function(){
    return {
        type: INCREMENT
    };
};

var decrementAction = function(){
    return {
        type: DECREMENT
    };
};



// reducers

var initalState = 0;

var counterReducer = function(state, action) {
    if(typeof state === 'undefined') {
        return initialState;
    }

    switch(action.type) {
    case INCREMENT:
        return state++;
    case DECREMENT:
        return state--;
    default:
        return state;
    }
};



