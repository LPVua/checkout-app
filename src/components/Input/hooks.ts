import { functionNoop } from "@acme-client/utils/function-noop";
import { useState } from "react";

export interface UseFocusHookPropsInterface {
  /**
   * Handle blur event
   */
  onBlur?(e: React.FocusEvent<HTMLInputElement>): void;

  /**
   * Handle focus event
   */
  onFocus?(e: React.FocusEvent<HTMLInputElement>): void;
}

export const useFocus = ({
  onFocus: onFocusProp = functionNoop,
  onBlur: onBlurProp = functionNoop,
}: UseFocusHookPropsInterface = {}) => {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocusProp(e);
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlurProp(e);
  };

  return {
    isFocused,
    onFocus,
    onBlur,
  };
};
