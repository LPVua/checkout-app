import { App } from ".";
import * as React from "react";
import { render, cleanup } from "@testing-library/react";

describe("App", () => {
  afterEach(cleanup);

  it("should render", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
});
