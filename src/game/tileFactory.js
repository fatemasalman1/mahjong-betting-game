import { TileCategory } from "./types";

let idCounter = 0;

export function createTile(tile) {
  return {
    id: idCounter++, // ✅ fixed
    name: tile.name,
    category: tile.category,
    suit: tile.suit,
    baseValue: tile.baseValue,
    value: tile.value,
  };
}