import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { ThemeProvider } from "./context/Theme.context";
import Counter from "./user/components/Counter";
import Factorial from "./user/containers/Factorial./Factorial";
import UseMemo from "./user/containers/CallBack/CallBack";
import UseRef from "./user/containers/UseRef/UseRef";

function App() {
  const store = configureStore();
  return (
    <ThemeProvider>
      <Provider store={store}>
      <UseRef/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
