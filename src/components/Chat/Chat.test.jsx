import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Chat from "./Chat";

describe("Chat Component, children and Routing render/work properly", () => {
  const socket = {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  };

  const validProps = {
    socket,
    roomcode: 34,
    username: "",
  };

  const setup = () => {
    const utils = render(
      <Chat
        roomcode={validProps.roomcode}
        username={validProps.username}
        socket={validProps.socket}
      />,
      { wrapper: BrowserRouter }
    );
    const input = screen.getByLabelText("message-input");
    return {
      input,
      ...utils,
    };
  };

  // Snapshot test not valid due to dynamic component ScrollToBottom.

  it("tests the component renders", () => {
    render(
      <Chat
        roomcode={validProps.roomcode}
        username={validProps.username}
        socket={validProps.socket}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(/►/i).toBeInTheDocument);
    expect(screen.getByText(/Live Chat/i).toBeInTheDocument);
    expect(screen.getByText(/Chat/i).toBeInTheDocument);
  });

  it("input send message changes", () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: "Hey" } });
    expect(input.value).toBe("Hey");

    userEvent.click(screen.getByText(/►/i));
  });
});
