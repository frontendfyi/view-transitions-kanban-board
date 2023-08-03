import { create } from "zustand";

type BoardStore = {
  draggingCard: string | null;
  setDraggingCard: (cardId: string | null) => void;
};

export const useBoardStore = create<BoardStore>((set) => ({
  draggingCard: null,
  setDraggingCard: (cardId: string | null) => set({ draggingCard: cardId }),
}));
