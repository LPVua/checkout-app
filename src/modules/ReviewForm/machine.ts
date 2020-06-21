import { Machine } from "xstate";
import { ReviewFormContextInterface } from "./context.interface";
import { actions } from "./actions";

export const reviewFormMachine = Machine<ReviewFormContextInterface>(
  {
    context: {
      formValues: {
        name: "",
        email: "",
        rating: 5,
        comments: "",
      },
      formErrors: {
        name: "",
        email: "",
      },
      touchedFields: {},
    },
    initial: "idle",
    on: {
      INPUT: {
        target: "validate",
        actions: ["updateFormValues", "setTouchedFields"],
      },
    },
    states: {
      idle: {},
      validate: {
        entry: ["updateFormErrors", "checkIfFormIsValid"],
        on: {
          FORM_IS_VALID: "dirty",
          FORM_IS_NOT_VALID: "error",
        },
      },
      dirty: {},
      error: {},
    },
  },
  {
    actions,
  }
);
