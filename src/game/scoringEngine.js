export function calculateHandTotal(hand) {
  if (!hand || hand.length === 0) return 0;

  return hand.reduce((sum, tile) => sum + tile.value, 0);
}