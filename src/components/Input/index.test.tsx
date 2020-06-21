import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import * as React from "react";
import { Input } from ".";

describe("Input", () => {
  afterEach(cleanup);

  it("should render proper markup", () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render input with label", () => {
    const { asFragment } = render(<Input label="some label" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should add focus styles to the container", () => {
    const { asFragment, getByTestId } = render(<Input />);

    fireEvent.focus(getByTestId("input"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should add focus styles to the label container", () => {
    const { asFragment, getByTestId } = render(<Input label="some label" />);

    fireEvent.focus(getByTestId("input"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should remove focus styles from the container", () => {
    const { asFragment, getByTestId } = render(<Input />);

    fireEvent.focus(getByTestId("input"));
    fireEvent.blur(getByTestId("input"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("should trigger onFocus and onBlur event handlers remove focus styles from the container", () => {
    const onBlurSpy = jest.fn();
    const onFocusSpy = jest.fn();
    const { getByTestId } = render(
      <Input onBlur={onBlurSpy} onFocus={onFocusSpy} />
    );

    fireEvent.focus(getByTestId("input"));
    fireEvent.blur(getByTestId("input"));
    expect(onFocusSpy).toHaveBeenCalled();
    expect(onBlurSpy).toHaveBeenCalled();
  });

  it("should add error styles to both container and label", () => {
    const { asFragment } = render(<Input label="some label" isError />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should trigger change event handler with text", () => {
    const onChangeSpy = jest.fn();

    const { getByTestId } = render(
      <Input label="some label" onChange={onChangeSpy} />
    );

    fireEvent.change(getByTestId("input"), {
      target: {
        value: "some text",
      },
    });

    expect(onChangeSpy).toHaveBeenCalledWith("some text");
  });

  it("should use a textarea as an input", () => {
    const { asFragment } = render(
      <Input label="some label">
        <textarea />
      </Input>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should use a textarea's onChange handler", () => {
    const onInputChangeSpy = jest.fn();
    const onTextAreaChangeSpy = jest.fn();
    const { getByTestId } = render(
      <Input label="some label" onChange={onInputChangeSpy}>
        <textarea data-testid="textarea" onChange={onTextAreaChangeSpy} />
      </Input>
    );

    fireEvent.change(getByTestId("textarea"), {
      target: {
        value: "some text",
      },
    });

    expect(onTextAreaChangeSpy).toHaveBeenCalled();
    expect(onInputChangeSpy).not.toHaveBeenCalled();
  });
});
