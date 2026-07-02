import { useEffect, useState } from "react";
import { initGame, playTurn, drawHand } from "../game/engine";
import { calculateHandTotal } from "../game/engine";
import { Button } from "@/components/ui/button";

export default function Game({ onExit }) {
  const [game, setGame] = useState(initGame());

  useEffect(() => {
    setGame((prev) => drawHand(prev));
  }, []);

  const currentTotal = calculateHandTotal(game?.currentHand || []);

  const getTileStyle = (tile) => {
    if (tile.category === "DRAGON") {
      return "bg-red-200 border-red-500 text-red-900";
    }
    if (tile.category === "WIND") {
      return "bg-blue-200 border-blue-500 text-blue-900";
    }
    if (tile.suit === "dots") {
      return "bg-gray-200 border-gray-500 text-gray-900";
    }
    if (tile.suit === "bamboo") {
      return "bg-green-200 border-green-500 text-green-900";
    }
    if (tile.suit === "characters") {
      return "bg-yellow-200 border-yellow-500 text-yellow-900";
    }

    return "bg-white border-gray-300 text-gray-900";
  };

  const handleBet = (bet) => {
    const newState = playTurn(game, bet);
    setGame(newState);
  };

  if (game.gameOver) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white gap-4">
        <h1 className="text-3xl font-bold">Game Over</h1>
        <h2 className="text-lg">Final Score: {game.score}</h2>
        <Button onClick={onExit}>Return to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-white">
      
      {/* TOP BAR */}
      <div className="text-center py-6 border-b border-white/10 bg-black/20 backdrop-blur">
        <h1 className="text-3xl font-bold tracking-wide">
          🀄 Mahjong Betting Game
        </h1>

        <div className="flex justify-center gap-6 text-sm text-white/70 mt-2">
          <div>Score: {game.score}</div>
          <div>Draw: {game.drawPile.length}</div>
          <div>Discard: {game.discardPile.length}</div>
          <div>Reshuffles: {game.reshuffleCount}</div>
        </div>
      </div>

      {/* MAIN TABLE AREA */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-6">
        
        <h2 className="text-xl font-semibold text-white/90">
          Hand Total: {currentTotal}
        </h2>

        {/* CARDS CENTERED */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          {game?.currentHand?.map((tile) => (
            <div
              key={tile.id}
              className={`
                w-20 h-24
                border-2 rounded-xl
                flex flex-col items-center justify-center
                text-center
                shadow-lg
                cursor-pointer
                transition-all duration-200
                hover:-translate-y-2
                hover:shadow-2xl
                ${getTileStyle(tile)}
              `}
            >
              <div className="text-sm font-semibold">
                {tile.name}
              </div>
              <div className="text-xs opacity-70">
                {tile.value}
              </div>
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3 pt-4">
          <Button onClick={() => handleBet("higher")}>
            Bet Higher
          </Button>

          <Button variant="secondary" onClick={() => handleBet("lower")}>
            Bet Lower
          </Button>

          <Button variant="destructive" onClick={onExit}>
            Exit Game
          </Button>
        </div>
      </div>

      {/* HISTORY SIDE (bottom on mobile feel) */}
      <div className="w-full max-w-4xl mx-auto pb-6">
        <div className="bg-black/30 border border-white/10 rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-3">History</h3>

          <div className="space-y-2 max-h-48 overflow-auto">
            {game?.history?.length === 0 && (
              <p className="text-sm text-white/40">
                No history yet
              </p>
            )}

            {game?.history?.map((h, i) => (
              <div
                key={i}
                className={`
                  flex justify-between items-center
                  text-sm px-3 py-2 rounded-md border
                  ${
                    h.won
                      ? "bg-green-900/30 border-green-500/30 text-green-300"
                      : "bg-red-900/30 border-red-500/30 text-red-300"
                  }
                `}
              >
                <div>{h.prevTotal} → {h.currentTotal}</div>
                <div className="uppercase text-xs">{h.bet}</div>
                <div className="font-semibold">
                  {h.won ? "Win" : "Lose"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}