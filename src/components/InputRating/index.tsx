import * as React from "react";
import { functionNoop } from "@acme-client/utils/function-noop";
import { cx } from "emotion";
import * as style from "./style";
import { PropsInterface as InputPropsInterface } from "@acme-client/components/Input/props.interface";
import { Input } from "../Input";

const Template: React.FunctionComponent<{
  value?: string;
  label?: string;
  className?: string;
  onChange?(value: string);
}> = ({ value, onChange = functionNoop, ...props }) => (
  <div className={cx(style.rating, props.className)}>
    {"12345".split("").map((rating) => (
      <div
        data-testid={`rating-${rating}`}
        className={cx(style.item, rating === value && style.itemSelected)}
        onClick={() => onChange(rating)}
        key={rating}
      >
        {rating}
      </div>
    ))}
  </div>
);

export const InputRating: React.FunctionComponent<InputPropsInterface> = ({
  onChange,
  ...props
}) => (
  <Input {...props}>
    <Template onChange={onChange} />
  </Input>
);
