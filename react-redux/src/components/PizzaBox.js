import React from "react";
import { orderPizza } from "./redux";
import { connect } from "react-redux";

function PizzaBox(props) {
  console.log("Props value", props);

  return (
    <div className="container">
      <h2 className="text">
        Number of Pizza-Base Available - {props.pizzaBase}
      </h2>
      <button className="btn" onClick={props.orderPizza}>
        Order Pizza
      </button>
    </div>
  );
}

// useSelector Hook
const mapStateToProps =(state)=>{
  return {
    pizzaBase: state.pizza.pizzaBase
  }
};

const mapDispatchToProps =(dispatch)=>{
  return {
    orderPizza: () => dispatch(orderPizza())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PizzaBox);
