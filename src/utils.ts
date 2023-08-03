import { CardsState, Columns } from "./types";

/**
 * This function can probably be written in a more performant way,
 * which becomes especially important if there's a lot of cards.
 *
 * For the purpose of this demo, I've chosen to write it in a way that
 * is "easy" to understand.
 */
export const moveCardToColumn = ({
  cards,
  cardId,
  column,
  index,
}: {
  cards: CardsState;
  cardId: string;
  column: Columns;
  index: number;
}) => {
  // Object.entries converts an object into an array of [key, value] pairs.
  // Where key = column name and value = array of cards in that column.
  const card = Object.entries(cards)
    // Then we map over each column
    .map(([column, cards]) => {
      // And check if the card we're looking for, is in this column.
      const card = cards.find((card) => card.id === cardId);
      // If not, nothing to worry about and we return null.
      if (!card) return null;

      // If it is, we return the column name and the card.
      return { previousColumn: column as Columns, card };

      // Because we use map, that means we get an array of whatever we return.
      // So in this case, it will be an array of null, and one time the object above.
      // (only one time, because each card can only be in one column).
    })
    // So here we have the array described above. We then filter all null values,
    // by passing the Boolean function. Then we take the first item in the array,
    // which should be our object.
    .filter(Boolean)[0];

  // At this point, we should have a single card, which is the card that we want to move.
  // That object should have a previousColumn property, which is the column the card was in before,
  // and a card property, which is the card itself.
  if (!card) {
    return cards;
  }

  // Next we create a new object (we don't mutate the original one, that could  result in weird side effects!)
  // We take the following steps:
  // 1. Copy all the columns from the original object by spreading ...cards
  // 2. Remove the card from the previous column by filtering it out of the array
  // 3. Add the card to the new column, by slicing the array at the index where we want to insert the card.
  const newCards = {
    ...cards,
    [card.previousColumn]: cards[card.previousColumn].filter(
      (card) => card.id !== cardId,
    ),
    [column]: [
      ...cards[column].slice(0, index),
      card.card,
      ...cards[column].slice(index),
    ],
  };

  // Then we return a new cards object, with the card moved to the new column.
  return newCards;
};
