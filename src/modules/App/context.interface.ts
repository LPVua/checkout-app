import { ReviewFormContextInterface } from "@acme-client/modules/ReviewForm/context.interface";

export interface AppContextInterface {
  reviews: Array<ReviewFormContextInterface["formValues"]>;
}
