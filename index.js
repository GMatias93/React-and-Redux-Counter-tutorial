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




// React Component

var Counter = React.createClass({
    render: function() {
        return (
            <div>
              <h1>{this.props.value}</h1>
              <button onClick={this.props.onIncrement}>Increment</button>
              <button onClick={this.props.onDecrement}>Decrement</button>
            </div>
        );
    }
});


// store

var store = Redux.createStore(counterReducer);
var render = function() {
    ReactDOM.render(
        <Counter
           value={store.getState()}
           onIncrement={function(){store.dispatch(incrementAction);}}
           onDecrement={function(){store.dispatch(decrementAction);}}/>,
        document.querySelector('.container'));
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

