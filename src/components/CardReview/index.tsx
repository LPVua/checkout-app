import * as React from "react";
import { Rating } from "@acme-client/components/Rating";
import * as style from "./style";

export const CardReview: React.FunctionComponent<{
  rating: number;
  title: string;
  subtitle: string;
  description: string;
}> = (props) => (
  <div className={style.card}>
    <div className={style.header}>
      <Rating value={props.rating} className={style.rating} />
      <div className={style.titleContainer}>
        <div className={style.title}>{props.title}</div>
        <div className={style.subtitle}>{props.subtitle}</div>
      </div>
    </div>
    <div className={style.description}>{props.description}</div>
  </div>
);
