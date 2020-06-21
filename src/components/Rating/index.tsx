import { cx } from "emotion";
import React = require("React");
import * as style from "./style";
export const Rating: React.FunctionComponent<{
  value: number;
  className?: string;
}> = (props) => {
  return (
    <div
      className={cx(
        style.rating,
        style.ratingColor(props.value),
        props.className
      )}
    >
      {props.value} / <span className={style.maxRating}>5</span>
    </div>
  );
};
