import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Router from "./Router";
import { DisclosureProvider } from "./contexts/DisclosureContext";
import "./index.css";
import store from "./store/store.js";
import theme from "./theme.js";

// reading from .env
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <DisclosureProvider>
            <Router />
          </DisclosureProvider>
        </Provider>
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
