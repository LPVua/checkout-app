export const ratingColor = (rating: number): string =>
  rating >= 4 ? "#1abc9c" : rating >= 3 ? "#f1c40f" : "var(--red-1)";
