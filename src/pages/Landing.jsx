import { Button } from "@/components/ui/button";

export default function Landing({ onStart }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative text-white">

      {/* BACKGROUND TABLE */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950 via-green-900 to-green-950" />

      {/* VIGNETTE (gives depth) */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70" />

      {/* MAIN PANEL */}
      <div className="relative w-full max-w-md text-center
                      bg-black/40 border border-white/10
                      rounded-2xl p-8 shadow-2xl backdrop-blur">

        {/* TITLE */}
        <h1 className="text-3xl font-semibold tracking-wide">
          Mahjong Betting Game
        </h1>

        <p className="text-white/50 text-sm mt-2 mb-8">
          Test your luck • bet • survive the tiles
        </p>

        {/* START BUTTON (hero action) */}
        <Button
          onClick={onStart}
          className="w-full text-lg py-6 rounded-xl shadow-lg"
        >
          Start Game
        </Button>

        {/* LEADERBOARD */}
        <div className="mt-8 border-t border-white/10 pt-5 text-left">
          <h2 className="text-xs uppercase tracking-wider text-white/60 mb-3">
            Leaderboard
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <p className="text-white/40 text-sm">
              No scores yet
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}