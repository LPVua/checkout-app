import { assign, EventObject, send } from "xstate";
import { ReviewFormContextInterface } from "./context.interface";
import { validatorEmail } from "@acme-client/utils/validator/email";

export const actions = {
  updateFormErrors: assign({
    formErrors: (context: ReviewFormContextInterface) => {
      return {
        email: validatorEmail(context.formValues.email)
          ? ""
          : "Please provide valid email",
        name: context.formValues.name ? "" : "Please enter your name",
      };
    },
  }),
  checkIfFormIsValid: send((context: ReviewFormContextInterface) => {
    if (
      Object.keys(context.formErrors).find((key) => context.formErrors[key])
    ) {
      return {
        type: "FORM_IS_NOT_VALID",
      };
    }
    return {
      type: "FORM_IS_VALID",
    };
  }),
  updateFormValues: assign({
    formValues: <K extends keyof ReviewFormContextInterface["formValues"]>(
      context,
      event: EventObject & {
        payload: {
          key: K;
          value: ReviewFormContextInterface["formValues"][K];
        };
      }
    ) => {
      return {
        ...context.formValues,
        [event.payload.key]: event.payload.value,
      };
    },
  }),
  setTouchedFields: assign({
    touchedFields: <K extends keyof ReviewFormContextInterface["formValues"]>(
      context,
      event: EventObject & {
        payload: {
          key: K;
          value: ReviewFormContextInterface["formValues"][K];
        };
      }
    ) => ({
      ...context.touchedFields,
      [event.payload.key]: true,
    }),
  }),
};
