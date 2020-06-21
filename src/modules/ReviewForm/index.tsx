import { Error } from "@acme-client/components/Error";
import { Input } from "@acme-client/components/Input";
import { InputTextarea } from "@acme-client/components/InputTextarea";
import * as React from "react";
import { ReviewFormContextInterface } from "./context.interface";
import { useMachine } from "@xstate/react";
import { reviewFormMachine } from "./machine";
import * as style from "./style";
import { Button } from "@acme-client/components/Button";
import { InputRating } from "@acme-client/components/InputRating";

const Template: React.FunctionComponent<{
  context: ReviewFormContextInterface;
  isSubmitButtonDisabled: boolean;
  className?: string;
  onAddReview(): void;
  onUpdateForm<K extends keyof ReviewFormContextInterface["formValues"]>(
    key: K,
    value: ReviewFormContextInterface["formValues"][K]
  ): void;
}> = (props) => (
  <div className={props.className}>
    <Input
      label="Name"
      value={props.context.formValues.name}
      className={style.input}
      onChange={(value) => props.onUpdateForm("name", value)}
    />
    {!!props.context.formErrors.name && props.context.touchedFields.name && (
      <Error className={style.error}>{props.context.formErrors.name}</Error>
    )}

    <Input
      label="Email"
      className={style.input}
      value={props.context.formValues.email}
      onChange={(value) => props.onUpdateForm("email", value)}
    />
    {!!props.context.formErrors.email && props.context.touchedFields.email && (
      <Error className={style.error}>{props.context.formErrors.email}</Error>
    )}

    <InputRating
      className={style.input}
      label={"Rating"}
      value={String(props.context.formValues.rating)}
      onChange={(value) => props.onUpdateForm("rating", Number(value))}
    />

    <InputTextarea
      label="Comments"
      className={style.input}
      value={props.context.formValues.comments}
      onChange={(value) => props.onUpdateForm("comments", value)}
    />

    <Button
      isDisabled={props.isSubmitButtonDisabled}
      onClick={props.onAddReview}
    >
      Add Review
    </Button>
  </div>
);

export const ReviewForm: React.FunctionComponent<{
  className?: string;
  onAddReview(formValues: ReviewFormContextInterface["formValues"]): void;
}> = (props) => {
  const [currentState, sendEvent] = useMachine(reviewFormMachine);

  const onUpdateForm = <
    K extends keyof ReviewFormContextInterface["formValues"]
  >(
    key: K,
    value: ReviewFormContextInterface["formValues"][K]
  ) => {
    sendEvent("INPUT", {
      payload: {
        key,
        value,
      },
    });
  };

  return (
    <Template
      className={props.className}
      isSubmitButtonDisabled={!currentState.matches("dirty")}
      onUpdateForm={onUpdateForm}
      onAddReview={() => props.onAddReview(currentState.context.formValues)}
      context={currentState.context}
    />
  );
};
