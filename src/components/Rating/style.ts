import { css } from "emotion";
import { ratingColor as ratingColorUtil } from "@acme-client/utils/rating-color";
export const rating = css({
  height: "36px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.8rem",
  padding: "0 0.6rem",
  borderRadius: ".3rem",
  background: "#1abc9c",
  color: "white",
  flexShrink: 0,
});

export const ratingColor = (rating: number) =>
  css({
    background: ratingColorUtil(rating),
  });

export const maxRating = css({
  fontSize: "1.4rem",
  paddingLeft: ".6rem",
});
