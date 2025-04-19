const redux = require("redux");
const createStore = redux.createStore; 
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();
const applyMiddleWare = redux.applyMiddleware;    
const combineReducers = redux.combineReducers; // for more than one reducers

// Actions in Redux
const ORDER_PIZZA = "ORDER_PIZZA";
const ORDER_BURGER = "ORDER_BURGER";

// Action Creator for Pizza
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    info: "First redux action",
  };
}

// Action Creator for Burger
function orderBurger() {
  return {
    type: ORDER_BURGER,
    info: "Second redux action",
  };
}

// Reducer
// (PreviousState, action) => newState
const initialStateForPizza = {
  pizzaBase: 100,
};

const initialStateForBurger = {
  burgerBuns: 200
};

// Reducer for Pizza
const reducerForPizza = (state = initialStateForPizza, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state, // Copying the entir state
        pizzaBase: state.pizzaBase - 1,
      };

    default:
      return state;
  }
};

// Reducer For Burger
const reducerForBurger = (state = initialStateForBurger, action) => {
  switch (action.type) {
    case ORDER_BURGER:
      return {
        ...state, // Copying the entir state
        burgerBuns: state.burgerBuns - 1,
      };

    default:
      return state;
  }
};

// Function for combining the reducers

const rootReducers = combineReducers({
  Pizza : reducerForPizza,
  Burger : reducerForBurger
})

// Simple way by using combine reducer 
// Store
// 1 -> Store needs to hold application states
const store = createStore(rootReducers, applyMiddleWare(logger));

// 2 -> It exposes a method called "getState" which gives your application access to the current state in the store.
console.log("Initial State", store.getState());

// 3 -> Register listener via subscriber(listener)
const unsubscribe = store.subscribe(() =>{});

// 4 -> Allows state to be updated via dispatch(action)
console.log('Pizza...');
store.dispatch(orderPizza());
store.dispatch(orderPizza());

console.log('Burgers...');
store.dispatch(orderBurger());
store.dispatch(orderBurger());

// 5 -> Final Step
// after unsubscribing we don't get permission to change the state
unsubscribe(); 

