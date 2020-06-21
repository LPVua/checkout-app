import * as style from "./style";
import * as React from "react";
import { cx } from "emotion";

export const Error: React.FunctionComponent<{
  className?: string;
}> = (props) => (
  <div
    className={cx(style.error, props.className)}
    data-testid={props["data-testid"]}
  >
    {props.children}
  </div>
);
