import "./App.css";
import PizzaBox from "./components/PizzaBox";
import { Provider } from "react-redux";
import store from "./components/redux/Store";

function App() {
  return (
    <Provider store={store}>
      <PizzaBox />
    </Provider>
  );
}

export default App;
