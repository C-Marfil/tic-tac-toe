import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import Header from "./Header";

describe("Header Component, children and Routing render/work properly", () => {
  const validProps = {
    setUsername: jest.fn(),
    username: "Carlos",
  };

  it("Snapshot test", () => {
    const { asFragment } = render(
      <Header
        setUsername={validProps.setUsername}
        username={validProps.username}
      />,
      { wrapper: BrowserRouter }
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("Tests the header renders", () => {
    render(
      <Header
        setUsername={validProps.setUsername}
        username={validProps.username}
      />,
      { wrapper: BrowserRouter }
    );

    expect(screen.getByAltText(/logo/i).toBeInTheDocument);
  });

  it("Tests the navigation works", () => {
    const route = "/lobby";

    render(
      <MemoryRouter initialEntries={[route]}>
        <Header
          setUsername={validProps.setUsername}
          username={validProps.username}
        />
      </MemoryRouter>
    );
    expect(screen.getByAltText(/logo/i).toBeInTheDocument);
  });
});
