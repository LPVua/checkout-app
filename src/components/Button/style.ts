import { css } from "emotion";

export const button = css({
  height: "4.8rem",
  border: "none",
  background: "var(--blue-1)",
  color: "var(--white-1)",
  fontSize: "inherit",
  borderRadius: ".3rem",
  padding: "0 .8rem",
  margin: 0,
  outline: "none",
  transition: "background .3s linear",
  "&:active": {
    background: "var(--blue-2)",
  },
});

export const disabled = css({
  pointerEvents: "none",
  opacity: ".5",
});
