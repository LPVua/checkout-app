import { css } from "emotion";

export const rating = css({
  padding: "0 1.8rem",
  display: "flex",
});

export const container = css({
  display: "flex",
});

export const item = css({
  width: "3.6rem",
  height: "3.6rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: ".6rem",
});

export const itemSelected = css({
  background: "var(--blue-1)",
  color: "var(--white-1)",
  borderRadius: "3.6rem",
});

export const label = css({
  fontSize: "1.2rem",
  color: "#95a5a6",
});
