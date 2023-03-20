import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@providers/ThemeProvider.jsx";
import { Provider } from "react-redux";
import store from "@store/store.js";
import App from "@/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
