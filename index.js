// action types

var INCREMENT = 'INCREMENT';
var DECREMENT = 'DECREMENT';



//action creators

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
