import pizzaReducer from "./pizza/PizzaReducers";
import { legacy_createStore } from "redux";

const store = legacy_createStore(pizzaReducer);

export default store;