import { Machine } from "xstate";
import { AppContextInterface } from "./context.interface";
import { actions } from "./actions";

export const appMachine = Machine<AppContextInterface>(
  {
    context: {
      reviews: [
        {
          name: "Pavlo Lompas",
          email: "paullompas@gmail.com",
          rating: 5,
          comments: "Amazing Service!",
        },
        {
          name: "Pavlo Lompas",
          email: "paullompas@gmail.com",
          rating: 4,
          comments: "Amazing Service!",
        },
        {
          name: "Pavlo Lompas",
          email: "paullompas@gmail.com",
          rating: 1,
          comments: "Amazing Service!",
        },
        {
          name: "Pavlo Lompas",
          email: "paullompas@gmail.com",
          rating: 3,
          comments: "Amazing Service!",
        },
        {
          name: "Pavlo Lompas",
          email: "paullompas@gmail.com",
          rating: 2,
          comments: "Amazing Service!",
        },
      ],
    },
    initial: "idle",
    states: {
      idle: {
        on: {
          ADD_REVIEW: {
            actions: ["addReview"],
          },
        },
      },
    },
  },
  {
    actions,
  }
);
