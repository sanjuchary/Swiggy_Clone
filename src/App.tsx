import { Provider } from "react-redux";
import "./App.css";
import MainStack from "./Navigation/MainStack";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </>
  );
}

export default App;
