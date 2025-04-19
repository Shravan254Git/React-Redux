const redux = require("redux");
const createStore = redux.createStore;

// Actions in Redux
const ORDER_PIZZA = "ORDER_PIZZA";

// Action Creator
function orderPizza() {
  return {
    type: ORDER_PIZZA,
    info: "First redux action",
  };
}

// Reducer
// (PreviousState, action) => newState
const initialState = {
  pizzaBase: 100,
  toppings: ['cheese', 'capsicum']
};

const reducer = (state = initialState, action) => {
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


// Store
// 1 -> Store needs to hold application states

const store = createStore(reducer);

// 2 -> It exposes a method called "getState" which gives your application access to the current state in the store.
console.log('Initial State', store.getState());

// 3 -> Register listener via subscriber(listener)
const unsubscribe = store.subscribe(()=> console.log("Udated State", store.getState()));

// 4 -> Allows state to be updated via dispatch(action)
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());
store.dispatch(orderPizza());

// 5 -> Final Step 
unsubscribe(); // after unsubscribing we don't get permission to change the state
store.dispatch(orderPizza());