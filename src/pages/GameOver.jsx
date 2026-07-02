import { Button } from "@/components/ui/button";

export default function GameOver({
  score,
  onPlayAgain,
  onBackHome,
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-950 via-green-900 to-green-950 text-white p-6">
      
      {/* CENTER PANEL */}
      <div className="w-full max-w-md text-center bg-black/30 border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6 tracking-wide">
          🀄 Game Over
        </h1>

        {/* SCORE (HERO ELEMENT) */}
        <div className="mb-8">
          <p className="text-white/60 text-sm mb-2">
            Final Score
          </p>
          <div className="text-5xl font-extrabold text-yellow-300 drop-shadow">
            {score}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-3">
          <Button
            onClick={onPlayAgain}
            className="w-full text-lg"
          >
            Play Again
          </Button>

          <Button
            onClick={onBackHome}
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10"
          >
            Back Home
          </Button>
        </div>

      </div>
    </div>
  );
}