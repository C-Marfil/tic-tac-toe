import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";

describe("Home Component, children and Routing render/work properly", () => {
  const validProps = {
    setUsername: jest.fn(),
    username: "",
  };

  const setup = () => {
    const utils = render(
      <Home
        setUsername={validProps.setUsername}
        username={validProps.username}
      />,
      { wrapper: BrowserRouter }
    );
    const input = screen.getByLabelText("username-input");
    return {
      input,
      ...utils,
    };
  };

  it("Snapshot test", () => {
    const { asFragment } = render(
      <Home
        setUsername={validProps.setUsername}
        username={validProps.username}
      />,
      { wrapper: BrowserRouter }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("tests username input", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Zufa" } });
    expect(input.value).toBe("Zufa");
  });

  it("tests the component renders", () => {
    render(
      <Home
        setUsername={validProps.setUsername}
        username={validProps.username}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(/PLAY!/i).toBeInTheDocument);
  });

  it("tests button and error message rendering", () => {
    render(
      <Home
        setUsername={validProps.setUsername}
        username={validProps.username}
      />,
      { wrapper: BrowserRouter }
    );
    userEvent.click(screen.getByText(/PLAY!/i));
    expect(
      screen.getByText(/Please enter your username before proceeding/i)
    ).toBeInTheDocument();
  });
});
