import { createTile } from "./tileFactory";
import { TileCategory } from "./types";

let tileId = 0;

// build base Mahjong-like simplified deck
export function createDeck() {
  const tiles = [];
 
  // Number tiles (1–9)
  const suits = ["dots", "bamboo", "characters"];

  suits.forEach((suit) => {
    for (let i = 1; i <= 9; i++) {
      for (let j = 0; j < 4; j++) {
        tiles.push(
          createTile({
            id: `num-${suit}-${i}-${tileId++}`,
            name: `${i}-${suit}`,
            category: TileCategory.NUMBER,
            suit,
            baseValue: i,
            value: i,
          })
        );
      }
    }
  });

  // Dragons
  ["Red", "Green", "White"].forEach((d) => {
    for (let i = 0; i < 4; i++) {
      tiles.push(
        createTile({
          id: `dragon-${d}-${tileId++}`,
          name: d,
          category: TileCategory.DRAGON,
          baseValue: 5,
          value: 5,
        })
      );
    }
  });

  // Winds
  ["East", "South", "West", "North"].forEach((w) => {
    for (let i = 0; i < 4; i++) {
      tiles.push(
        createTile({
          id: `wind-${w}-${tileId++}`,
          name: w,
          category: TileCategory.WIND,
          baseValue: 5,
          value: 5,
        })
      );
    }
  });

  return tiles;
}