import { Columns } from "./types";
import { Column } from "./components/column";
import { initialCardsPosition } from "./data";

import "./index.css";
import { useState } from "react";
import { useBoardStore } from "./board-store";
import { moveCardToColumn } from "./utils";
import { flushSync } from "react-dom";

const columnTitles: { [key in Columns]: string } = {
  [Columns.IDEAS]: "💡 Ideas",
  [Columns.IN_PROGRESS]: "⏳ In Progress",
  [Columns.DONE]: "✅ Done",
};

const columns = Object.entries(columnTitles) as unknown as [Columns, string][];

function App() {
  const [cards, setCards] = useState(initialCardsPosition);
  const draggingCard = useBoardStore((state) => state.draggingCard);

  const onDrop = (column: Columns, index: number) => {
    if (!draggingCard) return;

    const newCards = moveCardToColumn({
      cards,
      cardId: draggingCard,
      column,
      index,
    });

    document.startViewTransition(() => {
      flushSync(() => {
        setCards(newCards);
      });
    });
  };

  return (
    <div className="h-screen bg-gray-900 p-5 text-white">
      <div className="grid grid-cols-[repeat(3,300px)] gap-4 overflow-auto">
        {columns.map(([columnId, columnTitle]) => (
          <Column
            title={columnTitle}
            id={columnId}
            cards={cards[columnId]}
            onDrop={onDrop}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
