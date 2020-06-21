import {
  ScatterChart,
  Scatter,
  YAxis,
  Cell,
  ResponsiveContainer,
} from "recharts";
import * as React from "react";
import * as style from "./style";
import { useMachine } from "@xstate/react";
import { appMachine } from "./machine";
import { AppContextInterface } from "./context.interface";
import { ReviewForm } from "@acme-client/modules/ReviewForm";
import { ReviewFormContextInterface } from "@acme-client/modules/ReviewForm/context.interface";
import { CardReview } from "@acme-client/components/CardReview";
import { ratingColor } from "@acme-client/utils/rating-color";

export const App = () => {
  const [currentState, sendEvent] = useMachine(appMachine);

  return (
    <Template
      context={currentState.context}
      onAddReview={(formValues) => {
        sendEvent("ADD_REVIEW", { payload: formValues });
      }}
    />
  );
};

export const Template: React.FunctionComponent<{
  context: AppContextInterface;
  onAddReview(formValues: ReviewFormContextInterface["formValues"]): void;
}> = (props) => (
  <div className={style.app}>
    <div className={style.title}>Add Review</div>
    <ReviewForm className={style.form} onAddReview={props.onAddReview} />

    {!!props.context.reviews.length ? (
      <>
        <div className={style.title}>Happiness Trend</div>
        <ResponsiveContainer
          width={style.noReviewsStyles.width}
          height={200}
          className={style.happinessChart}
        >
          <ScatterChart data={props.context.reviews}>
            <Scatter
              line
              name="User rating"
              dataKey="rating"
              fill={style.chartStyles.fill}
              lineType="fitting"
            >
              {props.context.reviews.map((review, index) => (
                <Cell key={`cell-${index}`} fill={ratingColor(review.rating)} />
              ))}
            </Scatter>
            <YAxis hide type="number" domain={[0, 5]} />
          </ScatterChart>
        </ResponsiveContainer>
      </>
    ) : (
      <div className={style.noReviews}>No Reviews Yet</div>
    )}

    {!!props.context.reviews.length && (
      <>
        <div className={style.title}>Latest Reviews</div>
        {props.context.reviews.reduceRight(
          (list, review) => [
            ...list,
            <CardReview
              title={review.name}
              rating={review.rating}
              subtitle={review.email}
              description={review.comments}
            />,
          ],
          []
        )}
      </>
    )}
  </div>
);
