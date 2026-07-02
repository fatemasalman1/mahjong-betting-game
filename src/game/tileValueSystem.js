import { TileCategory } from "./types";

export function updateTileValues(hand, won, tileState) {
  hand.forEach(tile => {
    const current = tileState[tile.id]; // 👈 أهم سطر

    if (
      current.category === TileCategory.DRAGON ||
      current.category === TileCategory.WIND
    ) {
      const updatedValue = won
        ? current.value + 1
        : current.value - 1;

      tileState[tile.id] = {
        ...current,
        value: updatedValue,
      };
    }
  });
}