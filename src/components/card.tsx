import { useBoardStore } from "../board-store";
import type { Card as CardType } from "../types";

type CardProps = CardType;

export const Card = ({ title, id, users, tags }: CardProps) => {
  const setDraggingCard = useBoardStore((state) => state.setDraggingCard);

  return (
    <div
      draggable="true"
      onDragStart={() => setDraggingCard(id)}
      onDragEnd={() => setDraggingCard(null)}
      style={{ viewTransitionName: `card-${id}` }}
      className="cursor-grab rounded-md bg-gray-900 p-3 shadow-md active:animate-pulse active:cursor-grabbing"
    >
      <p>{title}</p>

      <div className="my-2 flex flex-wrap gap-2">
        <span className="rounded-md border border-gray-400 px-2 py-1 text-gray-400">
          #{id}
        </span>
        {tags &&
          tags.map((tag) => (
            <span className="rounded-md bg-gray-700 px-2 py-1">{tag}</span>
          ))}
      </div>

      {users && (
        <div className="flex gap-2">
          {users.map((user) => (
            <img
              className="h-8 w-8 rounded-full"
              alt={user}
              src={`https://api.dicebear.com/6.x/notionists/svg?seed=${user}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
