export function evaluateBet(prevTotal, currentTotal, bet) {
  if (!prevTotal) return { won: true };

  if (bet === "higher") {
    return { won: currentTotal > prevTotal };
  }

  if (bet === "lower") {
    return { won: currentTotal < prevTotal };
  }

  return { won: false };
}