export enum Columns {
  IDEAS,
  IN_PROGRESS,
  DONE,
}

export type Card = {
  id: string;
  title: string;
  tags?: string[];
  users?: string[];
};

export type CardsState = { [key in Columns]: Card[] };
