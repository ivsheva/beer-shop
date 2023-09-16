import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./Router";
import "./index.css";
import store from "./store/store.js";
import theme from "./theme.js";
import { DisclosureProvider } from "./contexts/DisclosureContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <DisclosureProvider>
          <Router />
        </DisclosureProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
