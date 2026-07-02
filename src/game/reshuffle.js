import { createDeck } from "./deck";
import { shuffle } from "./utils";

export function reshuffle(game) {
  const combined = [
    ...game.discardPile,
    ...game.drawPile,
  ];

  return {
    ...game,
    drawPile: shuffle(combined),
    discardPile: [],
    reshuffleCount: game.reshuffleCount + 1,
  };
}