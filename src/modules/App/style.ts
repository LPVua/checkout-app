import { injectGlobal, css } from "emotion";

injectGlobal`
  :root {
    --grey-1: #bdc3c7;
    --grey-2: #727272;
    --grey-3: #ecf0f1;
    --blue-1: #3498db;
    --blue-2: #2c80b8;
    --red-1: #e74c3c;
    --dark-1: #1B1D1D;
    --white-1: #ffffff;
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: Arial, Helvetica, sans-serif;
  }

  html, body {
    width: 100%;
    margin: 0;
    padding: 0;
    min-height: 100%;
  }

  body {
    font-size: 1.6rem;
  }
`;

export const app = css({
  padding: ".8rem",
});

export const noReviewsStyles = {
  width: "100%",
  height: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const noReviews = css(noReviewsStyles);

export const chartStyles = {
  fill: "var(--blue-1)",
};

export const happinessChart = css({
  marginBottom: "1.2rem",
});

export const title = css({
  lineHeight: "22px",
  fontWeight: "bold",
  marginBottom: "1.2rem",
});

export const form = css({
  marginBottom: "1.2rem",
});
