import { create } from "zustand";

export const useStore = create((set) => ({
  playerPosition: [0, 0, 0],
  isInteracting: false,
  interactionTarget: null,
  setPlayerPosition: (pos) => set({ playerPosition: pos }),
  setInteraction: (target) =>
    set({ isInteracting: !!target, interactionTarget: target }),
}));
