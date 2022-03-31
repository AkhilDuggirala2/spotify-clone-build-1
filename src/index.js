import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App/App";
import reportWebVitals from "./reportWebVitals";

// redux config
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import configureStore, { history, sagaMiddleware } from "./store";
import sagas from "./sagas";

import { SnackbarProvider } from "notistack";

const { persistor, store } = configureStore();
sagaMiddleware.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <SnackbarProvider maxSnack={1}>
          <App />
        </SnackbarProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
