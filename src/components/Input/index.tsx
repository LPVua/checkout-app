import { cloneElement } from "react";
import { cx } from "emotion";
import * as React from "react";
import { functionNoop } from "@acme-client/utils/function-noop";
import * as style from "./style";
import { useFocus } from "./hooks";
import { PropsInterface } from "./props.interface";

/**
 * Input component
 */
export const Input: React.FunctionComponent<PropsInterface> = ({
  onFocus: onFocusProp = functionNoop,
  onBlur: onBlurProp = functionNoop,
  onChange: onChangeProp = functionNoop,
  ...props
}) => {
  const { isFocused, onFocus, onBlur } = useFocus({
    onFocus: onFocusProp,
    onBlur: onBlurProp,
  });
  const onChange = (e: React.FormEvent<HTMLInputElement>) =>
    onChangeProp(e.currentTarget.value);
  const childInput = props.children || <input onChange={onChange}></input>;

  return (
    <div
      className={cx([
        style.container.default,
        isFocused && style.container.focused,
        props.isError && style.container.error,
        props.className,
      ])}
    >
      {!!props.label && (
        <div
          className={cx([
            style.label.default,
            (isFocused || props.value) && style.label.focused,
            props.isError && style.label.error,
          ])}
        >
          {props.label}
        </div>
      )}

      <div className={style.inputContainer.default}>
        {cloneElement(childInput, {
          className: cx([
            style.input.default,
            props.label && style.input.withLabel,
            childInput.props.className,
          ]),
          value: props.value,
          onChange: childInput.props.onChange || onChange,
          onFocus: onFocus,
          onBlur: onBlur,
        })}
      </div>
    </div>
  );
};
