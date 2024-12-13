export function numberFormatter(num: number | undefined) {
  return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") : DASH;
}

export const DASH = "—";
export const ROWS_PER_PAGE = 50;

export enum SortingKeys {
  TITLE = "Title",
  RATING = "IMDB_Rating",
}

export enum SortingDirections {
  ASC = "Ascending",
  DESC = "Descending",
  NONE = "None",
}
