import "./App.css";
import PizzaBox from "./components/PizzaBox";
import { Provider } from "react-redux";
import store from "./components/redux/Store";
import HooksContainer from "./components/HooksContainer";
import BurgerBox from "./components/BurgerBox";

function App() {
  return (
    <Provider store={store}>
      <PizzaBox />
      <BurgerBox/>
      {/* <HooksContainer /> */}
    </Provider>
  );
}

export default App;
