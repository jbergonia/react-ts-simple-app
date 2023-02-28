import PhotoList from "./PhotoList";
import { render, screen, waitFor } from "@testing-library/react";

import { ApolloProvider } from "@apollo/client";
import ApolloClient from "../utils/apollo-client";

describe("PhotoList", async () => {
  it("should render the photo list", async () => {
    render(
      <ApolloProvider client={ApolloClient}>
        <PhotoList />,
      </ApolloProvider>
    );
    await waitFor(() => {
      expect(screen.getByText("ID")).toBeInTheDocument();
      expect(screen.getByText("Title")).toBeInTheDocument();
      expect(screen.getByText("Thumbnail")).toBeInTheDocument();
    });
  });
});
