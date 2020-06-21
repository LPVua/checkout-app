import { actions } from "./actions";

describe("App actions", () => {
  describe("addReview()", () => {
    it("should add review to the end of reviews list", () => {
      expect(
        (actions.addReview.assignment as any).reviews(
          {
            reviews: ["review 1"],
          },
          {
            payload: "review 2",
          }
        )
      ).toEqual(["review 1", "review 2"]);
    });
  });
});
