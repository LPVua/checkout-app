import { PropsInterface as InputPropsInterface } from "@acme-client/components/Input/props.interface";
import React = require("React");
import { Input } from "../Input";
import * as style from "./style";

export const InputTextarea: React.FunctionComponent<InputPropsInterface> = ({
  children,
  ...props
}) => (
  <Input {...props}>
    <textarea rows={6} className={style.textarea} data-testid={"input"} />
  </Input>
);
