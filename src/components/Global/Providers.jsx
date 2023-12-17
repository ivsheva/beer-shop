import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { DisclosureProvider } from "../../contexts/DisclosureContext.jsx";
import store from "../../store/store.js";
import theme from "../../theme.js";

// reading from .env
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const queryClient = new QueryClient();

function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <ChakraProvider theme={theme}>
          <Provider store={store}>
            <DisclosureProvider>{children}</DisclosureProvider>
          </Provider>
        </ChakraProvider>
      </Auth0Provider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default Providers;
