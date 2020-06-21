import { UseFocusHookPropsInterface } from "./hooks";

export interface PropsInterface extends UseFocusHookPropsInterface {
  /**
   * Input is in error state
   */
  isError?: boolean;

  /**
   * Label which will be shown instead of placeholder.
   * Will move up and will be visible after user will set input value
   */
  label?: string;

  /**
   * Value
   */
  value?: string;

  /**
   * Additional class name
   */
  className?: string;

  /**
   * Pass one child to this component if you want to override default input component
   */
  children?: React.ReactElement<
    UseFocusHookPropsInterface & Pick<PropsInterface, "value" | "className">
  >;

  /**
   * Will be called after value is being changed
   */
  onChange?(text: string): void;
}
