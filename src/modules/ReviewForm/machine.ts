import { Machine } from "xstate";
import { ReviewFormContextInterface } from "./context.interface";
import { actions } from "./actions";

export const defaultContext = {
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
};

export const reviewFormMachine = Machine<ReviewFormContextInterface>(
  {
    context: defaultContext,
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
      dirty: {
        on: {
          ADD_REVIEW: {
            target: "idle",
            actions: ["clearForm"],
          },
        },
      },
      error: {},
    },
  },
  {
    actions,
  }
);
