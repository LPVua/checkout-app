import { assign, EventObject, send } from "xstate";
import { ReviewFormContextInterface } from "./context.interface";
import { validatorEmail } from "@acme-client/utils/validator/email";
import { defaultContext } from "./machine";

export const actions = {
  /**
   * Clear form context
   */
  clearForm: assign(() => defaultContext),

  /**
   * Update form errors context
   */
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

  /**
   * Check if form is valid and send validation events
   */
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

  /**
   * Update form values in the context
   */
  updateFormValues: assign({
    formValues: <K extends keyof ReviewFormContextInterface["formValues"]>(
      context,
      event: EventObject & {
        payload: {
          key: K;
          value: ReviewFormContextInterface["formValues"][K];
        };
      }
    ) => ({
      ...context.formValues,
      [event.payload.key]: event.payload.value,
    }),
  }),

  /**
   * Set touched fields
   */
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
