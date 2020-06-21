import { assign, EventObject } from "xstate";
import { AppContextInterface } from "./context.interface";
import { ReviewFormContextInterface } from "@acme-client/modules/ReviewForm/context.interface";

export const actions = {
  /**
   * Add review to list of reviews
   */
  addReview: assign({
    reviews: (
      context: AppContextInterface,
      event: EventObject & {
        payload: ReviewFormContextInterface["formValues"];
      }
    ) => {
      return [...context.reviews, event.payload];
    },
  }),
};
