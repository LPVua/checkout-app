import * as React from "react";
import * as style from "./style";
import { cx } from "emotion";
import { functionNoop } from "@acme-client/utils/function-noop";

export const Button: React.FunctionComponent<{
  isDisabled?: boolean;
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}> = (props) => (
  <button
    onClick={props.isDisabled ? functionNoop : props.onClick}
    className={cx(style.button, props.isDisabled && style.disabled)}
  >
    {props.children}
  </button>
);
