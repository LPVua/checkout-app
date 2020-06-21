export interface ReviewFormContextInterface {
  formValues: {
    name: string;
    email: string;
    rating: number;
    comments: string;
  };
  formErrors: {
    name: string;
    email: string;
  };
  touchedFields: Partial<
    Record<keyof ReviewFormContextInterface["formValues"], boolean>
  >;
}
