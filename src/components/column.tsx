import React from "react";
import { Card as CardType, Columns } from "../types";
import { Card } from "./card";
import { DropArea } from "./droparea";

type ColumnProps = {
  title: string;
  id: Columns;
  cards: CardType[];
  onDrop: (column: Columns, index: number) => void;
};

export const Column = ({ title, id, cards, onDrop }: ColumnProps) => {
  return (
    <div className="rounded-lg bg-gray-700 p-3">
      <h2 className="mb-3 text-xl">{title}</h2>
      <div className="flex flex-col">
        <DropArea onDrop={() => onDrop(id, 0)} />
        {cards.map((card, index) => (
          <React.Fragment key={card.id}>
            <Card {...card} />
            <DropArea onDrop={() => onDrop(id, index + 1)} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
