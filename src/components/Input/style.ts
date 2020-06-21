import { css } from "emotion";

export const container = {
  default: css({
    display: "flex",
    width: "100%",
    position: "relative",
    alignItems: "center",
    minHeight: "4.8rem",
    border: ".1rem solid var(--grey-1)",
    background: "white",
    borderRadius: ".3rem",
  }),
  focused: css({
    border: ".1rem solid var(--blue-1)",
  }),
  error: css({
    borderColor: "var(--red-1) !important",
  }),
};

export const label = {
  default: css({
    position: "absolute",
    left: "1.8rem",
    top: "1.2rem",
    width: "auto",
    color: "#95a5a6",
    transform: "translateY(0.2rem) scale(1)",
    transformOrigin: "top left",
    transition: "transform .15s linear",
    zIndex: 0,
  }),
  error: css({
    color: "var(--red-1)",
  }),
  focused: css({
    transform: "translateY(-0.6rem) scale(.75)",
  }),
};

export const inputContainer = {
  default: css({
    display: "flex",
    width: "100%",
    color: "var(--dark-1)",
    zIndex: 1,
  }),
};

export const input = {
  default: css({
    padding: ".6rem",
    flexGrow: 1,
    width: "100%",
    minWidth: 0,
    height: "100%",
    background: "transparent",
    paddingLeft: "1.8rem",
    borderRadius: ".3rem",
    border: "none",
    margin: 0,
    font: "inherit",
    outline: "none",
  }),
  withLabel: css({
    paddingTop: "1.8rem",
  }),
};
