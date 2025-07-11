import React from "react";
import { connect } from "react-redux";
import { orderBurger } from "./redux/burger/BurgerActions";

function BurgerBox(props) {
 
  return (
    <div className="container">
      <h2 className="text">
        Number of Burger Buns Available - {props.burgerBuns}
      </h2>
      <button className="btn" onClick={props.orderBurger}>
        Order Burger
      </button>
    </div>
  );
}

// useSelector Hook
const mapStateToProps =(state)=>{
  return {
    burgerBuns: state.burger.burgerBuns
  }
};

// useDispatch hook
const mapDispatchToProps =(dispatch)=>{
  return {
    orderBurger: () => dispatch(orderBurger())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBox);
