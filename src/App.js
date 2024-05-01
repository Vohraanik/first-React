import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { ThemeProvider } from "./context/Theme.context";
import Counter from "./user/components/Counter";
import Factorial from "./user/containers/Factorial./Factorial";

function App() {
  const store = configureStore();
  return (
    <ThemeProvider>
      <Provider store={store}>
  <Factorial/>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
