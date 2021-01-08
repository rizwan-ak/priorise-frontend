import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Routes from "./@utils/routes";
import store from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store.store}>
      <PersistGate persistor={store.persistor}>
        <Router>
          <Switch>
            <Routes />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
