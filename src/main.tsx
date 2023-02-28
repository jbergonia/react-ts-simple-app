import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ApolloProvider } from "@apollo/client";
import ApolloClient from "./utils/apollo-client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={ApolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
