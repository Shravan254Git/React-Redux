import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderPizza } from "./redux";

function HooksContainer() {
  // mapStateToProps(PizzaBox) - from "useSelector" hook we are getting access to the redux states.
  const pizzaBase = useSelector((state) => state.pizzaBase);

  // mapDispatchToProps(PizzaBox) - from "useDispatch" hook we are initiating the action.
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2 className="text">Number of Pizza-Base Available - {pizzaBase}</h2>
      <button className="btn" onClick={() => dispatch(orderPizza())}>
        Order Pizza
      </button>
    </div>
  );
}

export default HooksContainer;
