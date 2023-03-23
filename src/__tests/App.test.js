import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "../components/App";

test("full app rendering/navigating", async () => {
  const history = createMemoryHistory({ initialEntries: ["/"]["/lobby"] });
  const setup = () => {
    const utils = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    const input = screen.getByLabelText("username-input");
    return {
      input,
      ...utils,
    };
  };
  const { input } = setup();

  expect(screen.getByText(/PLAY!/i)).toBeInTheDocument(); // It is in Home

  fireEvent.change(input, { target: { value: "Zufa" } }); // Adds input so it does not throw error
  fireEvent.click(screen.getByText(/PLAY!/i)); // Clicks button, it should navigate to "/lobby"

  expect(screen.getByText(/PLAY!/i).toBeInTheDocument); // It should be in Lobby
});
