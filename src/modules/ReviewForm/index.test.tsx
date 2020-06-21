import * as React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { ReviewForm } from ".";

describe("ReviewForm", () => {
  afterEach(cleanup);
  it("should render properly", () => {
    const { asFragment } = render(<ReviewForm onAddReview={() => {}} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("should display error message if name field was touched and is empty", () => {
    const { getByTestId } = render(<ReviewForm onAddReview={() => {}} />);

    fireEvent.change(
      getByTestId("name-input").querySelector("[data-testid=input]"),
      { target: { value: "p" } }
    );
    fireEvent.change(
      getByTestId("name-input").querySelector("[data-testid=input]"),
      { target: { value: "" } }
    );

    expect(getByTestId("name-error")).toBeDefined();
    expect(getByTestId("name-error").textContent).toEqual(
      "Please enter your name"
    );
  });
  it("should display error message if email field was touched and is not a valid email", () => {
    const { getByTestId } = render(<ReviewForm onAddReview={() => {}} />);

    fireEvent.change(
      getByTestId("email-input").querySelector("[data-testid=input]"),
      { target: { value: "pav" } }
    );

    expect(getByTestId("email-error")).toBeDefined();
    expect(getByTestId("email-error").textContent).toEqual(
      "Please provide valid email"
    );
  });
  it("should not trigger onAddReview event handler if form has errors", () => {
    const onAddReviewSpy = jest.fn();
    const { getByTestId } = render(<ReviewForm onAddReview={onAddReviewSpy} />);

    fireEvent.change(
      getByTestId("email-input").querySelector("[data-testid=input]"),
      { target: { value: "pav" } }
    );

    fireEvent.click(getByTestId("submit-button"));

    expect(onAddReviewSpy).not.toHaveBeenCalled();
  });

  it("should not trigger onAddReview event handler if form is empty", () => {
    const onAddReviewSpy = jest.fn();
    const { getByTestId } = render(<ReviewForm onAddReview={onAddReviewSpy} />);

    fireEvent.click(getByTestId("submit-button"));

    expect(onAddReviewSpy).not.toHaveBeenCalled();
  });

  it("should trigger addReview event handler with form values", () => {
    const onAddReviewSpy = jest.fn();
    const { getByTestId } = render(<ReviewForm onAddReview={onAddReviewSpy} />);

    fireEvent.change(
      getByTestId("name-input").querySelector("[data-testid=input]"),
      { target: { value: "Pavlo" } }
    );
    fireEvent.change(
      getByTestId("email-input").querySelector("[data-testid=input]"),
      { target: { value: "paullompas@gmail.com" } }
    );
    fireEvent.click(
      getByTestId("rating-input").querySelector("[data-testid=rating-3]")
    );

    fireEvent.change(
      getByTestId("comments-input").querySelector("[data-testid=input]"),
      { target: { value: "Random comment" } }
    );

    fireEvent.click(getByTestId("submit-button"));

    expect(onAddReviewSpy).toHaveBeenCalledWith({
      name: "Pavlo",
      rating: 3,
      email: "paullompas@gmail.com",
      comments: "Random comment",
    });
  });
});
