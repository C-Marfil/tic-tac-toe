import React from "react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import JoinRoom from "./JoinRoom";

describe("JoinRoom, children and Routing render/work properly", () => {
  const rooms = [];
  const socket = {
    on: jest.fn(rooms.push(13)),
    off: jest.fn(),
    emit: jest.fn(),
  };

  const validProps = {
    socket,
    setRoomCode: jest.fn(),
    roomCode: "",
  };

  const setup = () => {
    const utils = render(
      <JoinRoom
        socket={validProps.socket}
        setRoomCode={validProps.setRoomCode}
        roomCode={validProps.roomCode}
      />,
      { wrapper: BrowserRouter }
    );
    const input = screen.getByLabelText("roomcode-input");
    return {
      input,
      ...utils,
    };
  };

  it("Snapshot test", () => {
    const { asFragment } = render(
      <JoinRoom
        socket={validProps.socket}
        setRoomCode={validProps.setRoomCode}
        roomCode={validProps.roomCode}
      />,
      { wrapper: BrowserRouter }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("tests the component renders", () => {
    render(
      <JoinRoom
        socket={validProps.socket}
        setRoomCode={validProps.setRoomCode}
        roomCode={validProps.roomCode}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByText(/Enter a room code/i).toBeInTheDocument);
    expect(screen.getByText(/Refresh Rooms/i).toBeInTheDocument);
    expect(screen.getByText(/Save/i).toBeInTheDocument);
  });

  it("input coderooms and throws error if input empty", () => {
    const { input } = setup();

    userEvent.click(screen.getByText(/Save/i));
    expect(
      screen.getByText(/Please enter a room code to create a room/i)
    ).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "13" } });
    expect(input.value).toBe("13");

    userEvent.click(screen.getByText(/Save/i));
    expect(() =>
      screen.getByText(/Please enter a room code to create a room/i)
    ).toThrow("Unable to find an element");
  });
});
