import { createDeck } from "./deck";
import { shuffle } from "./utils";
import { calculateHandTotal } from "./scoringEngine";
import { evaluateBet } from "./bettingEngine";
import { reshuffle } from "./reshuffle";
import { updateTileValues } from "./tileValueSystem";

export function initGame() {
  const deck = shuffle(createDeck());

  const tileState = deck.reduce((acc, tile) => {
    acc[tile.id] = tile;
    return acc;
  }, {});

  return {
    score: 0,
    tileState,            
    drawPile: deck.map(t => t.id), 
    discardPile: [],
    currentHand: [],
    previousHand: [],
    history: [],
    reshuffleCount: 0,
    gameOver: false,
  };
}
export function drawHand(gameState) {
const newState = structuredClone(gameState);
  const handIds = newState.drawPile.splice(0, 5);

  const hand = handIds.map(id => newState.tileState[id]);

  newState.previousHand = newState.currentHand;
  newState.currentHand = hand;

  newState.discardPile.push(...handIds);

  return newState;
}
export function playTurn(gameState, bet) {
  let newState = structuredClone(gameState);

  if (newState.gameOver) return newState;

  const prevHand = newState.currentHand || [];
  const prevTotal = calculateHandTotal(prevHand);

  // Reshuffle
  if (newState.drawPile.length < 5) {
    newState = reshuffle(newState);
  }

  // Game Over after 3 reshuffles
  if (newState.reshuffleCount >= 3) {
    return {
      ...newState,
      gameOver: true,
    };
  }

  // Draw new hand
  const handIds = newState.drawPile.splice(0, 5);

  let hand = handIds.map(
    (id) => newState.tileState[id]
  );

  const currentTotal = calculateHandTotal(hand);

  const result = evaluateBet(
    prevTotal,
    currentTotal,
    bet
  );

  // Dynamic Scaling
  updateTileValues(
    hand,
    result.won,
    newState.tileState
  );

  // Reload hand from updated tileState
  hand = handIds.map(
    (id) => newState.tileState[id]
  );

  // Game Over if any Wind/Dragon reaches limit
  const reachedLimit = hand.some(
    (tile) =>
      (tile.category === "wind" ||
        tile.category === "dragon") &&
      (tile.value <= 0 || tile.value >= 10)
  );

  if (reachedLimit) {
    return {
      ...newState,
      currentHand: hand,
      gameOver: true,
    };
  }

  // Score update
  newState.score += result.won ? 10 : -5;

  // History
  newState.history.push({
    prevTotal,
    currentTotal,
    bet,
    won: result.won,
  });

  // Update state
  newState.previousHand = prevHand;
  newState.currentHand = hand;

  newState.discardPile.push(...handIds);

  return newState;
}